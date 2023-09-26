import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import DogDetail from '../Screens/DogDetail';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='perfil' component={Profile} />
        <Stack.Screen name='dogdetail' component={DogDetail} />
    </Stack.Navigator>
  )
}

export default RootNavigation