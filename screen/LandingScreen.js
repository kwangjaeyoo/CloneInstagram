import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function LandingScrren(props) {
  const navigation = useNavigation();

  function gotoSignUp() {
    navigation.navigate('Register');
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
