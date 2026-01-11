import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useUIStore, Toast as ToastType } from '../stores/uiStore';

const Toast: React.FC = () => {
  const toasts = useUIStore((state) => state.toasts);
  const removeToast = useUIStore((state) => state.removeToast);

  if (toasts.length === 0) {
    return null;
  }

  // Show only the most recent toast
  const currentToast = toasts[toasts.length - 1];

  return (
    <ToastItem
      toast={currentToast}
      onDismiss={() => removeToast(currentToast.id)}
    />
  );
};

interface ToastItemProps {
  toast: ToastType;
  onDismiss: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  const slideAnim = React.useRef(new Animated.Value(-100)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Slide in
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-dismiss
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onDismiss();
      });
    }, toast.duration);

    return () => clearTimeout(timer);
  }, [toast.duration, onDismiss]);

  const getToastStyle = () => {
    switch (toast.type) {
      case 'success':
        return styles.success;
      case 'error':
        return styles.error;
      case 'warning':
        return styles.warning;
      default:
        return styles.info;
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        getToastStyle(),
        {
          transform: [{ translateY: slideAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.content}
        onPress={onDismiss}
        activeOpacity={0.8}
      >
        <Text style={styles.message}>{toast.message}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 9999,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  info: {
    backgroundColor: '#2196F3',
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  error: {
    backgroundColor: '#F44336',
  },
  warning: {
    backgroundColor: '#FF9800',
  },
});

export default Toast;

