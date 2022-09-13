import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import Screen_Alg1 from "./screens/Screen_Alg1";
import Screen_Alg2 from "./screens/Screen_Alg2";
import PredictionScreen from "./screens/PredictionScreen";
import SelectionScreen from "./screens/SelectionScreen";
import DescriptionScreen from "./screens/DescriptionScreen";

import { Provider } from 'react-redux';
// import { store } from '.store';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
      <HomeStack.Screen name='Description' component={DescriptionScreen} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();



export default function App() {

  const screenOptions = { 
    tabBarStyle: {
      showLabel: false,
      backgroundColor: '#F8F8F8',
      height: 100,
      // position: 'absolute',
      // bottom: 25,
      // left: 20,
      // right: 20,
      // elevation: 0,
      // backgroundColor: '#ffffff',
      // borderRadius: 15,
    },
    tabBarItemStyle: {
      showLabel: false,
    }
  }

  return (
    
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator
        initialRouteName={"Home"}
        tabBarOptions={{showLabel: false,
        }}
        {...{ screenOptions }}
        >
            
            <Tab.Screen name='Algorithm 1' component={Screen_Alg1}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('./assets/icons/algoritmo.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#4DC6FC' : '#748c94',
                    }}
                  
                  />
                  <Text
                  style={{color: focused ? '#4DC6FC' : '#748c94', fontSize: 14}}
                  >Algo 1</Text>
                </View>
              ),
            
            }} />
            <Tab.Screen name='Algorithm 2' component={Screen_Alg2}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('./assets/icons/algoritmo.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#4DC6FC' : '#748c94',
                    }}
                  
                  />
                  <Text
                  style={{color: focused ? '#4DC6FC' : '#748c94', fontSize: 14}}
                  >Algo 2</Text>
                </View>
              ),
            
            }} />
            <Tab.Screen name='Home' component={HomeStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('./assets/icons/home.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#4DC6FC' : '#748c94',
                    }}
                  
                  />
                  <Text
                  style={{color: focused ? '#4DC6FC' : '#748c94', fontSize: 14}}
                  >Home</Text>
                </View>
              ),
            
            }} />
            <Tab.Screen name='Prediction' component={PredictionScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('./assets/icons/prediction.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#4DC6FC' : '#748c94',
                    }}
                  
                  />
                  <Text
                  style={{color: focused ? '#4DC6FC' : '#748c94', fontSize: 14}}
                  >Prediction</Text>
                </View>
              ),
            
            }} />
            <Tab.Screen name='Selection' component={SelectionScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('./assets/icons/select.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#4DC6FC' : '#748c94',
                    }}
                  
                  />
                  <Text
                  style={{color: focused ? '#4DC6FC' : '#748c94', fontSize: 14}}
                  >Selection</Text>
                </View>
              ),
            
            }} />
      </Tab.Navigator>
      </TailwindProvider>

    </NavigationContainer>
    
  );
}
