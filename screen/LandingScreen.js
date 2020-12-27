import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';

export default function LandingScrren(props) {
  function gotoSignUp() {
    console.log('goto Sign up');
  }

  function gotoRegister() {
    console.log('gotoRegister');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Landing Screen</Text>
      <TouchableOpacity onPress={() => gotoSignUp()}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => gotoRegister()}>
        <Text>Regist</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
