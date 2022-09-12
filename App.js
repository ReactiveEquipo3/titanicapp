import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import HomeScreen from './screens/HomeScreen';

import { Provider } from 'react-redux';
// import { store } from '.store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </TailwindProvider>

    </NavigationContainer>
    
  );
}
