import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none', // Hide tabs for now, navigation will be custom
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Main Menu',
        }}
      />
      <Tabs.Screen
        name="run-start"
        options={{
          title: 'Start Run',
        }}
      />
      <Tabs.Screen
        name="battle-list"
        options={{
          title: 'Battle List',
        }}
      />
      <Tabs.Screen
        name="boss-battle-list"
        options={{
          title: 'Boss Battle List',
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
        }}
      />
      <Tabs.Screen
        name="quest"
        options={{
          title: 'Quest',
        }}
      />
      <Tabs.Screen
        name="magic"
        options={{
          title: 'Magic',
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
      <Tabs.Screen
        name="run-end"
        options={{
          title: 'Run End',
        }}
      />
    </Tabs>
  );
}

