import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { showNotImplementedToast } from '../utils/toast';

interface QuickAccessButtonProps {
  title: string;
  onPress?: () => void;
  implemented?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const QuickAccessButton: React.FC<QuickAccessButtonProps> = ({
  title,
  onPress,
  implemented = false,
  style,
  textStyle,
}) => {
  const handlePress = () => {
    if (implemented && onPress) {
      onPress();
    } else {
      showNotImplementedToast(title);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  text: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
});

