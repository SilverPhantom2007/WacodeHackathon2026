import * as Location from 'expo-location';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

  // begin chatgpt code
const accountSid = 'AC9f211060be3505daaa587a5980624b7f';
const authToken = 'e17c37f39b8495238a683b4a162fef94';
const twilioNumber = '+18884169963';
const toNumber = '+18777804236';

const sendSMS = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Location permission denied');
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = loc.coords;
    const message = `I'm feeling unsafe. Here's my location: https://maps.google.com/?q=${latitude},${longitude}`;

    const body = new URLSearchParams();
    body.append('To', toNumber);
    body.append('From', twilioNumber);
    body.append('Body', message);

    await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + btoa(`${accountSid}:${authToken}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      }
    );
  } catch (err) {
    Alert.alert('Failed to send SMS');
  }
};
   // end chatgpt code

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.text}>Home screen</Text>
  //     <Link href="/about" style={styles.button}>
  //       Go to Settings
  //     </Link>
  //     <Button
  //       title="Press me"
  //       onPress={sendSMS}
  //     />
  //   </View>
  // );

  
export default function PlayScreen() {
  const [score, setScore] = useState(0);
  const [emergency, setEmergency] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={[styles.pill, emergency && styles.pillRed]} onPress={() => { setEmergency(e => !e); sendSMS(); }}>
          <Text style={[styles.pillText, emergency && styles.pillTextRed]}>x2</Text>
        </TouchableOpacity>

        <Text style={styles.title}>BAKLAVA</Text>

        <View style={styles.pill}>
          <Text style={styles.pillText}>{score}</Text>
        </View>
      </View>

      <View style={styles.center}>
        <Text style={styles.score}>{score}</Text>

        <TouchableOpacity style={styles.btn} onPress={() => setScore(s => s + 1)}>
          <Image
            source={require('../../assets/images/favicon.png')}
            style={styles.baklavaImage} 
          />
        </TouchableOpacity>

        <Text style={styles.hint}>tap the baklava</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#def3b8' 
  },
  topBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10 
  },
  title: {
    color: '#c9a84c',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 4,
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
  label: { 
    fontSize: 11, 
    color: '#6a7a4a', 
    letterSpacing: 2, 
    marginBottom: 24 
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
