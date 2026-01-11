import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { PlayerState } from '../types/GameContext';

interface PersistentStatsPreviewProps {
  playerState: PlayerState;
  totalRunsCompleted?: number;
  highestLevel?: number;
}

export const PersistentStatsPreview: React.FC<PersistentStatsPreviewProps> = ({
  playerState,
  totalRunsCompleted = 0,
  highestLevel = 1,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persistent Stats</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Total Experience:</Text>
        <Text style={styles.value}>{playerState.experience}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Highest Level:</Text>
        <Text style={styles.value}>{highestLevel}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Runs Completed:</Text>
        <Text style={styles.value}>{totalRunsCompleted}</Text>
      </View>
      {playerState.persistentBonuses.length > 0 && (
        <View style={styles.row}>
          <Text style={styles.label}>Active Bonuses:</Text>
          <Text style={styles.value}>{playerState.persistentBonuses.length}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#B0D4FF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

