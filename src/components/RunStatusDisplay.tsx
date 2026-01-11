import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { RunState, PlayerState } from '../types/GameContext';

interface RunStatusDisplayProps {
  runState: RunState;
  playerState: PlayerState;
}

export const RunStatusDisplay: React.FC<RunStatusDisplayProps> = ({
  runState,
  playerState,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Run Status</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Run ID:</Text>
        <Text style={styles.value}>{runState.runId}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Gold:</Text>
        <Text style={styles.value}>{playerState.gold}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Experience:</Text>
        <Text style={styles.value}>{playerState.experience}</Text>
      </View>
      {runState.activeQuests.length > 0 && (
        <View style={styles.row}>
          <Text style={styles.label}>Active Quests:</Text>
          <Text style={styles.value}>{runState.activeQuests.length}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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

