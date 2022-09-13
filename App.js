import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import Screen_Alg1 from "./screens/Screen_Alg1";
import Screen_Alg2 from "./screens/Screen_Alg2";
import PredictionScreen from "./screens/PredictionScreen";
import SelectionScreen from "./screens/SelectionScreen";
import DescriptionScreen from "./screens/DescriptionScreen";

import { Provider } from 'react-redux';
// import { store } from '.store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <TailwindProvider>

        <Tab.Navigator
          screenOptions={{
            style: {
              position: 'absolute',
              bottom: 25, left: 20, right: 20, elevation: 0, backgroundColor: '#ffffff', borderRadius: 15, height: 90,
            }
          }}
        >
          <Tab.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
          <Tab.Screen name='Algorithm 1' component={Screen_Alg1} options={{headerShown: false}} />
          <Tab.Screen name='Algorithm 2' component={Screen_Alg2} options={{headerShown: false}} />
          <Tab.Screen name='Prediction' component={PredictionScreen} options={{headerShown: false}} />
          <Tab.Screen name='Selection' component={SelectionScreen} options={{headerShown: false}} />
          
        </Tab.Navigator>
{/*         <Stack.Navigator>
          <Stack.Screen name='Description' component={DescriptionScreen} options={{headerShown: false}} />
        </Stack.Navigator> */}
      </TailwindProvider>

    </NavigationContainer>
    
  );
}
