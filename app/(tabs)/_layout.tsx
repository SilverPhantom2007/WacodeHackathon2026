import { Tabs } from 'expo-router';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';


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
        name="play"
        options={{
          title: 'BAKLAVA',
          tabBarLabel: 'PLAY',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="gamepad" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'SETTINGS',
          tabBarLabel: 'SETTINGS',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
