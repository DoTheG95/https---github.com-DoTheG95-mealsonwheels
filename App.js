import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet } from 'react-native';
import { RestaurantScreen } from './src/features/restaurants/screens/RestaurantScreen';

export default function App() {
  return (
    <>
      <RestaurantScreen /> 
      <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({

});