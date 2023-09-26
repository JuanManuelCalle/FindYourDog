import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import TabNav from './src/Navigation/TabNav';
import { dogs } from './src/redux/findoDogs';
import RootNavigation from './src/Navigation/RootNavigation';

export default function App() {
  return (
      <Provider store={dogs}>
          <NavigationContainer>
          <TabNav />
        </NavigationContainer>
      </Provider>
  );
}