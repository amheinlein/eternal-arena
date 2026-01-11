import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from '../src/components/Toast';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="(tabs)/index" 
          options={{ 
            title: 'Eternal Arena',
            headerShown: false 
          }} 
        />
      </Stack>
      <Toast />
    </SafeAreaProvider>
  );
}

