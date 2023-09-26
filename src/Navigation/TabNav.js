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


const TabNav = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, title: ""}}>
        <Tab.Screen options={{tabBarIcon: ({focused}) => <AntDesign name="home" size={26} color={focused ? colors.rosadoFuerte : "black"} /> }} 
        name='Home' component={Home}
        />

        <Tab.Screen options={{tabBarIcon: ({focused}) => <AntDesign name="pluscircleo" size={26} color={focused ? colors.rosadoFuerte : "black"} /> }} 
        name='reporter' component={ReporterDog}
        />

        
        <Tab.Screen options={{tabBarIcon: ({focused}) => <FontAwesome name="user-circle" size={26} color={focused ? colors.rosadoFuerte : "black"} /> }} 
        name='profile' component={Profile}
        />

        <Tab.Screen name='dogdetail' component={DogDetail} options={{tabBarButton: () => null}} />
    </Tab.Navigator>
  )
}

export default TabNav