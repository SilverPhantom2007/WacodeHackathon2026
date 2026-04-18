import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function AboutScreen() {

  
  function textChangeHandler(){
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Phone Number</Text>
      <TextInput style={{height: 40, borderColor: 'white', borderWidth: 0, color:'#595959', fontSize:20, marginHorizontal:5}}
        onChange={textChangeHandler}>Input</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffd33d',
    fontSize: 24
  },
});
