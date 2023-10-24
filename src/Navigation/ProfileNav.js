/**
   * Archivo para crear rutas del perfil en donde retornan su respectiva Screen
 */

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../Screens/Profile';
import MapaLoc from '../Screens/MapaLoc';
import AuthNav from './AuthNav';

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator independent={true} screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name='profile' component={Profile} />
      <Stack.Screen name='map' component={MapaLoc} />
      <Stack.Screen name='auth' component={AuthNav} />

    </Stack.Navigator>
  )
}

export default ProfileNav