/**
 * Archivo para crear el menu de navbar en donded se muestran los iconos que retornan vistas de la aplicacion
 */

import { Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import ReporterDog from '../Screens/ReporterDog';
import { colors } from '../theme/colors';
import RootNavigation from './RootNavigation';
import DogDetail from '../Screens/DogDetail';
import ProfileNav from './ProfileNav';
import MapaLoc from '../Screens/MapaLoc';


const TabNav = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, title: ""}}>
        {/* con color se hace que si esta activo mostramos el color rasofuerte y si no esta activo mostramos el color black  */}
        <Tab.Screen options={{tabBarIcon: ({focused}) => <AntDesign name="home" size={26} color={focused ? colors.rosadoFuerte : "black"} /> }} 
        name='Home' component={Home}
        />

        <Tab.Screen options={{tabBarIcon: ({focused}) => <AntDesign name="pluscircleo" size={26} color={focused ? colors.rosadoFuerte : "black"} /> }} 
        name='reporter' component={ReporterDog}
        />

        
        <Tab.Screen options={{tabBarIcon: ({focused}) => <FontAwesome name="user-circle" size={26} color={focused ? colors.rosadoFuerte : "black"} /> }} 
        name='profile' component={ProfileNav}
        />

        <Tab.Screen name='dogdetail' component={DogDetail} options={{tabBarButton: () => null}} />
        <Tab.Screen name='map' component={MapaLoc} options={{tabBarButton: () => null}} />
    </Tab.Navigator>
  )
}

export default TabNav