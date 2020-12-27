import React, {Component} from 'react';
import {View, Button, TextInput, Text} from 'react-native';

// funtion onSignUp = () => {
//   console.log('12212');
// };

export function Register() {
  this.state = {
    email: '',
    password: '',
    name: '',
  };

  onSignUp() = {};

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="name"
        onChangeText={(name) => this.setState({name})}
      />
      <TextInput
        placeholder="email"
        onChangeText={(email) => this.setState({email})}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password})}
      />
      <Button title="Sing UP" onPress={() => this.onSignUp()} />
    </View>
  );
}
