import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState("I'm feeling unsafe. Here's my location:");

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <Text style={styles.title}>SETTINGS</Text>

        <Text style={styles.label}>EMERGENCY CONTACT</Text>
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            placeholder="+1 555 000 0000"
            placeholderTextColor="#6a7a4a"
            keyboardType="phone-pad"
            value={contact}
            onChangeText={setContact}
          />
        </View>

        <Text style={styles.label}>EMERGENCY MESSAGE</Text>
        <View style={styles.section}>
          <TextInput
            style={[styles.input, styles.multiline]}
            placeholder="Your message..."
            placeholderTextColor="#6a7a4a"
            multiline
            value={message}
            onChangeText={setMessage}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#49572b' },
  scroll: { padding: 20, gap: 8 },
  title: { color: '#c9a84c', fontSize: 18, fontWeight: '600', letterSpacing: 4, textAlign: 'center', marginBottom: 24 },
  label: { fontSize: 10, color: '#6a7a4a', letterSpacing: 1.5, marginBottom: 6, marginLeft: 4 },
  section: { backgroundColor: '#232b14', borderWidth: 1, borderColor: '#3a4a20', borderRadius: 12, padding: 14, marginBottom: 20 },
  input: { fontSize: 14, color: '#e8f0d0' },
  multiline: { height: 80, textAlignVertical: 'top' },
});
