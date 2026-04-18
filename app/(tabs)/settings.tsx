import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setSmsMessage, smsMessage } from '../../shared/message';

export default function SettingsScreen() {
  const [contact, setContact] = useState('');
  const [text, setText] = useState(smsMessage);
  
  return (
    <SafeAreaView style={styles.container}>

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
            value={text}
            onChangeText={setText}
          />
        </View>
        
        <TouchableOpacity style={styles.pill} onPress={() => setSmsMessage(text)}>
                  <Text style={styles.input}>Save</Text>
                </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#49572b' },
  label: { fontSize: 20, color: '#c9a84c', letterSpacing: 1.5, marginBottom: 6, marginLeft: 4 },
  section: { backgroundColor: '#232b14', borderWidth: 1, borderColor: '#3a4a20', borderRadius: 12, padding: 8, marginBottom: 16 },
  input: { fontSize: 15, color: '#e8f0d0' },
  multiline: { height: 80, textAlignVertical: 'top' },
  topBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10 
  },
  pill: { 
    backgroundColor: '#232b14', 
    borderWidth: 1, 
    borderColor: '#3a4a20', 
    borderRadius: 20, 
    paddingHorizontal: 10, 
    paddingVertical: 7, 
    minWidth: 52, 
    alignItems: 'center' 
  },
  pillRed: {
    backgroundColor: '#3d1a1a',
    borderColor: '#c0392b',
  },
  pillText: {
    color: '#8fbc5a',
    fontSize: 14,
    fontWeight: '600',
  },
  pillTextRed: {
    color: '#ff6b6b',
  },
  center: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 8 
  },
  score: { 
    fontSize: 72, 
    fontWeight: '500', 
    color: '#c9a84c' 
  },
  btn: { 
    width: 250, 
    height: 250, 
    borderRadius: 75, 
    overflow: 'hidden' 
  },
  baklavaImage: { 
    width: 250, 
    height: 250, 
    alignItems: 'center'
  },
  hint: {
    marginTop: 16,
    fontSize: 12,
    color: '#3a4a20',
    letterSpacing: 2,
  },
});
