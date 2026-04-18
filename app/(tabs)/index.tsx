import { Link } from 'expo-router';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const sendSMS = async () => {
    const accountSid = 'YOUR_ACCOUNT_SID';
    const authToken = 'YOUR_AUTH_TOKEN';

    const twilioNumber = '+1234567890'; // your Twilio number
    const toNumber = '+1234567890';     // verified number (trial restriction)

    const body = new URLSearchParams();
    body.append('To', toNumber);
    body.append('From', twilioNumber);
    body.append('Body', 'Hello from Expo');

    try {
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

      Alert.alert('SMS sent');
    } catch (err) {
      console.error(err);
      Alert.alert('Failed to send SMS');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to Settings
      </Link>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Button pressed')}
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
