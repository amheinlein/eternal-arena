import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { showNotImplementedToast } from '../utils/toast';

interface ActionButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  implemented?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  onPress,
  disabled = false,
  implemented = false,
  style,
  textStyle,
}) => {
  const handlePress = () => {
    if (disabled) return;
    
    if (implemented && onPress) {
      onPress();
    } else {
      showNotImplementedToast(title);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style,
      ]}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, disabled && styles.textDisabled, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    minHeight: 56,
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  textDisabled: {
    color: '#666',
  },
});

