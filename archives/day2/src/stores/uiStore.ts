import { create } from 'zustand';

export interface Notification {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'error' | 'warning';
  duration?: number;
}

export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

interface UIStore {
  // Modal state
  activeModal: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
  
  // Loading states
  loadingActions: Set<string>;
  setLoading: (action: string, loading: boolean) => void;
  
  // Notifications
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
  
  // Toast notifications
  toasts: Toast[];
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  showNotImplementedToast: (featureName: string) => void;
  removeToast: (id: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeModal: null,
  openModal: (modalId) => set({ activeModal: modalId }),
  closeModal: () => set({ activeModal: null }),
  
  loadingActions: new Set(),
  setLoading: (action, loading) => set((state) => {
    const newSet = new Set(state.loadingActions);
    if (loading) {
      newSet.add(action);
    } else {
      newSet.delete(action);
    }
    return { loadingActions: newSet };
  }),
  
  notifications: [],
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, notification]
  })),
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
  
  // Toast notifications
  toasts: [],
  showToast: (message, type = 'info', duration = 3000) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const toast: Toast = { id, message, type, duration };
    
    set((state) => ({
      toasts: [...state.toasts, toast]
    }));
    
    // Auto-remove after duration
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter(t => t.id !== id)
      }));
    }, duration);
  },
  showNotImplementedToast: (featureName) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const toast: Toast = {
      id,
      message: `${featureName} is not yet implemented`,
      type: 'info',
      duration: 3000
    };
    
    set((state) => ({
      toasts: [...state.toasts, toast]
    }));
    
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter(t => t.id !== id)
      }));
    }, 3000);
  },
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter(t => t.id !== id)
  }))
}));

