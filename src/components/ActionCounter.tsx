import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ActionCounterProps {
  actionsRemaining: number;
  totalActions?: number;
}

export const ActionCounter: React.FC<ActionCounterProps> = ({
  actionsRemaining,
  totalActions,
}) => {
  const getColor = () => {
    if (actionsRemaining === 0) return '#F44336'; // Red
    if (actionsRemaining <= 2) return '#FF9800'; // Orange
    return '#4CAF50'; // Green
  };

  const displayText = totalActions
    ? `Actions: ${actionsRemaining}/${totalActions}`
    : `Actions Remaining: ${actionsRemaining}`;

  return (
    <View style={[styles.container, { backgroundColor: getColor() }]}>
      <Text style={styles.text}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

