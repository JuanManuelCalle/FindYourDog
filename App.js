import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './src/Navigation/TabNav';
import { dogs } from './src/redux/findoDogs';
import RootNavigation from './src/Navigation/RootNavigation';
import MainNav from './src/Navigation/MainNav';
import { Provider } from 'react-redux';

export default function App() {
  return (
      <Provider store={dogs}>
        <MainNav />
      </Provider>
  );
}