import * as Location from 'expo-location';
import { Link } from 'expo-router';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  // begin chatgpt code
  const sendSMS = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location permission denied');
        return;
      }

      // 2. Get current position
      let loc = null;
      try {
        loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
      } catch (e) {}

      if (!loc) {
        loc = await Location.getLastKnownPositionAsync();
      }

      if (!loc) {
        loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        }).catch(() => null);
      }

      if (!loc) {
        Alert.alert('Location unavailable');
        return;
      }
      const { latitude, longitude } = loc.coords;

      const message = `I'm feeling unsafe. Here's my location: https://maps.google.com/?q=${latitude},${longitude}`;
      //Alert.alert(message);
      const accountSid = 'AC9f211060be3505daaa587a5980624b7f';
      const authToken = '';

      const twilioNumber = '+18884169963'; // your Twilio number
      const toNumber = '+18777804236';     // verified number (trial restriction)

      const body = new URLSearchParams();
      body.append('To', toNumber);
      body.append('From', twilioNumber);
      body.append('Body', message);

      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Authorization':
              'Basic ' + btoa(`${accountSid}:${authToken}`),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        }
      );

      if (!response.ok) {
        throw new Error('Twilio request failed');
      }

      //Alert.alert('SMS sent');
    } catch (err) {
      console.error(err);
      Alert.alert('Failed to send SMS');
    }
  }; // end chatgpt code

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/settings" style={styles.button}>
        Go to Settings
      </Link>
      <Button
        title="Press me"
        onPress={sendSMS}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
