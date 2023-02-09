import React from 'react';
import {useState} from 'react';
// import firebase from '../database/firebase';

import {StyleSheet, Button, Text, View, TextInput} from 'react-native';

function Signup({navigation}) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const signUp = () => {
    // alert('done');
    // alert(username);
    // alert(email);
    // alert(Password);
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, Password)
    //   .then(() => {
    //     alert('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });
  };
  return (
    //  <Text>dfdfd</Text>
    <>
      <View>
        <Text>Abhishek kumar</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Usernames"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={text => setUsername(text)}
          // onChange={(e)=setUsername(e.target.value)}
        />

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
        <Button title="Sign Up" onPress={signUp} />
        <Text onPress={() => navigation.navigate('login')}>login</Text>
      </View>
    </>
  );
}

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

export default Signup;
