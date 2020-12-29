import React, {useState, useEffect} from 'react';
import {SafeAreaView, Button, TextInput, Text} from 'react-native';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSignUp() {}

  useEffect(() => {
    console.log('end render!!');
    console.log(name);
    return () => {
      console.log('use effect retrun log');
      console.log(name);
    };
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Register</Text>
      <Text>name = {name}</Text>
      <TextInput placeholder="name" onChangeText={(val) => setName(val)} />
      <TextInput placeholder="email" onChangeText={(val) => setEmail(val)} />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(val) => setPassword(val)}
      />
      <Button title="Sing UP" onPress={() => onSignUp()} />
    </SafeAreaView>
  );
}
