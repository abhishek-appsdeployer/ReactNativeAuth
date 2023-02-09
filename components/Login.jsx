import React ,{useState}from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const login = () => {
      // alert('done');
      // alert(username);
      // alert(email);
      // alert(Password);
      auth()
  .createUserWithEmailAndPassword('abhishek2019kr@gmail.com', '12345678')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    };
  return (
  <>
    <View>
        <Text>Loginss</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={text => setPassword(text)}
        />
        <Button title="Log in" onPress={login} />

        <Text onPress={()=>navigation.navigate("signup")}>Signup</Text>
    </View>
  </>
  );
};
const styles = StyleSheet.create({
    textinput: {
      backgroundColor: 'green',
      borderColor: '#000000',
      borderWidth: 1,
      padding: 5,
      margin: 5,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  

export default Login;
