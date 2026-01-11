import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useGameStore } from '../../src/stores/gameStore';
import { ActionButton } from '../../src/components/ActionButton';
import { PersistentStatsPreview } from '../../src/components/PersistentStatsPreview';

export default function RunStartScreen() {
  const router = useRouter();
  const initializeNewRun = useGameStore((state) => state.initializeNewRun);
  const gameContext = useGameStore((state) => state.gameContext);

  const handleStartRun = () => {
    initializeNewRun();
    router.replace('/(tabs)');
  };

  // If we already have a game context, show persistent stats
  const playerState = gameContext?.playerState;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Start New Run</Text>
      <Text style={styles.subtitle}>Eternal Arena</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Starting Conditions</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>• Starting Actions: 10</Text>
          <Text style={styles.infoText}>• All skills start at level 1</Text>
          <Text style={styles.infoText}>• No items or gold initially</Text>
        </View>
      </View>

      {playerState && (
        <View style={styles.section}>
          <PersistentStatsPreview
            playerState={playerState}
            totalRunsCompleted={0}
            highestLevel={1}
          />
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Persistent Bonuses</Text>
        {playerState && playerState.persistentBonuses.length > 0 ? (
          <View style={styles.infoBox}>
            {playerState.persistentBonuses.map((bonus) => (
              <Text key={bonus.id} style={styles.infoText}>
                • {bonus.type}
              </Text>
            ))}
          </View>
        ) : (
          <Text style={styles.noBonuses}>No persistent bonuses yet</Text>
        )}
      </View>

      <ActionButton
        title="Start Run"
        onPress={handleStartRun}
        implemented={true}
        style={styles.startButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  infoBox: {
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  noBonuses: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    padding: 16,
  },
  startButton: {
    marginTop: 24,
    marginBottom: 32,
  },
});

