import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function RunEndScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(tabs)')} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Main Menu</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Run End</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.message}>Coming Soon</Text>
        <Text style={styles.description}>
          This screen will display run results and persistent bonuses earned.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#2196F3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

