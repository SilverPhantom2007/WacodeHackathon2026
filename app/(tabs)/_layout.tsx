import { Tabs } from 'expo-router';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    //tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#1a1f0f',
    },
    headerShadowVisible: false,
    headerTintColor: '#e8f0d0',
    headerTitleStyle: {
      letterSpacing: 2,
      fontWeight: '500',
    },
    tabBarStyle: {
      backgroundColor: '#0f1208',
      borderTopColor: '#3a4a20',
      borderTopWidth: 1,
      height: 60,
    },
    tabBarActiveTintColor: '#8fbc5a',
    tabBarInactiveTintColor: '#5a6640',
    tabBarLabelStyle: {
      fontSize: 9,
      letterSpacing: 1,
      marginBottom: 6,
    },
  }}
>

  <Tabs.Screen
        name="index"
        options={{
          title: 'CLICK THE BAKLAVA',
          tabBarLabel: 'PLAY',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sports-esports" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'SETTINGS',
          tabBarLabel: 'SETTINGS',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
