import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useGameStore } from '../../src/stores/gameStore';
import { ActionCounter } from '../../src/components/ActionCounter';
import { ActionButton } from '../../src/components/ActionButton';
import { QuickAccessButton } from '../../src/components/QuickAccessButton';
import { RunStatusDisplay } from '../../src/components/RunStatusDisplay';
import { PersistentStatsPreview } from '../../src/components/PersistentStatsPreview';

export default function MainMenuScreen() {
  const router = useRouter();
  const gameContext = useGameStore((state) => state.gameContext);
  const endRun = useGameStore((state) => state.endRun);

  // Redirect to run-start if no game context
  useEffect(() => {
    if (!gameContext) {
      router.replace('/(tabs)/run-start');
    }
  }, [gameContext, router]);

  if (!gameContext) {
    return null; // Will redirect
  }

  const handleEndRun = () => {
    endRun();
    router.push('/(tabs)/run-end');
  };

  const actionsExhausted = gameContext.availableActions === 0;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Eternal Arena</Text>
        <Text style={styles.subtitle}>Main Menu</Text>

        <ActionCounter
          actionsRemaining={gameContext.availableActions}
          totalActions={10}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>
          <ActionButton
            title="Battle"
            onPress={() => router.push('/(tabs)/battle-list')}
            disabled={actionsExhausted}
            implemented={true}
          />
          <ActionButton
            title="Boss Fight"
            onPress={() => router.push('/(tabs)/boss-battle-list')}
            disabled={actionsExhausted}
            implemented={true}
          />
          <ActionButton
            title="Shop"
            onPress={() => router.push('/(tabs)/shop')}
            disabled={actionsExhausted}
            implemented={true}
          />
          <ActionButton
            title="Quest"
            onPress={() => router.push('/(tabs)/quest')}
            disabled={actionsExhausted}
            implemented={true}
          />
          <ActionButton
            title="Magic"
            onPress={() => router.push('/(tabs)/magic')}
            disabled={actionsExhausted}
            implemented={true}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickAccessRow}>
            <QuickAccessButton
              title="Inventory"
              onPress={() => router.push('/(tabs)/inventory')}
              implemented={true}
              style={styles.quickAccessButton}
            />
            <QuickAccessButton
              title="Stats"
              onPress={() => router.push('/(tabs)/stats')}
              implemented={true}
              style={styles.quickAccessButton}
            />
            <QuickAccessButton
              title="Settings"
              onPress={() => router.push('/(tabs)/settings')}
              implemented={true}
              style={styles.quickAccessButton}
            />
          </View>
        </View>

        <RunStatusDisplay
          runState={gameContext.currentRun}
          playerState={gameContext.playerState}
        />

        <PersistentStatsPreview
          playerState={gameContext.playerState}
          totalRunsCompleted={0}
          highestLevel={1}
        />

        {actionsExhausted && (
          <View style={styles.section}>
            <ActionButton
              title="End Run"
              onPress={handleEndRun}
              implemented={true}
              style={styles.endRunButton}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
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
    marginBottom: 24,
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
  quickAccessRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  quickAccessButton: {
    flex: 1,
    minWidth: '30%',
    marginHorizontal: 4,
  },
  endRunButton: {
    backgroundColor: '#F44336',
    marginTop: 8,
  },
});
