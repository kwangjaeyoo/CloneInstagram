import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';

import LandingScreen from './screen/LandingScreen';
import Register from './screen/Register';

const firebaseConfig = {
  apiKey: 'AIzaSyCq8uHKaM4N-OvimPxwR1Qr623LYIc8Fyw',
  authDomain: 'clone-instagram-6e7ed.firebaseapp.com',
  projectId: 'clone-instagram-6e7ed',
  storageBucket: 'clone-instagram-6e7ed.appspot.com',
  messagingSenderId: '274977219864',
  appId: '1:274977219864:web:eb7bc1ed4b27f75089aa6d',
  measurementId: 'G-NWZ08THYG0',
};

if (firebase.app.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="landingScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="landingScreen" component={LandingScreen} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
