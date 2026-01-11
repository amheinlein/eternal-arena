import { useUIStore } from '../stores/uiStore';

/**
 * Show a toast notification
 * @param message - The message to display
 * @param type - The type of toast (info, success, error, warning)
 * @param duration - Duration in milliseconds (default: 3000)
 */
export const showToast = (
  message: string,
  type: 'info' | 'success' | 'error' | 'warning' = 'info',
  duration: number = 3000
) => {
  useUIStore.getState().showToast(message, type, duration);
};

/**
 * Show a "not implemented" toast notification
 * @param featureName - The name of the feature that's not implemented
 */
export const showNotImplementedToast = (featureName: string) => {
  useUIStore.getState().showNotImplementedToast(featureName);
};

