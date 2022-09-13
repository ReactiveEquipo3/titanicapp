import { ScrollView, Image, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';


export default function HomeScreen({ navigation }) {

  // const image = { uri: "https://reactjs.org/logo-og.png" };
  const image = require("../assets/imgs/bg-img.jpg");

  const styles = StyleSheet.create({
    container: {
      // display: 'flex',
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    image: {
      flex: 1,
    },
    team: {
      backgroundColor: '#4DC6FC',
      padding: 10,
      borderRadius: 30,
      paddingLeft: 0,
      paddingRight: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
    },
    teamtext: {
      textAlign: 'center',
      marginRight: 20,
    },
    cuadro: {
      backgroundColor: '#4DC6FC',
      borderRadius: 25,
      marginRight: 7,
      marginLeft: 7,
    },
  });

  return (

    <ImageBackground source={image} resizeMode='cover' style={styles.image}> 
    <SafeAreaView className='' style={styles.container}>
      
      <View>
        <View>
          <Text className='font-bold text-gray-300 text-7xl'>Titanic</Text>
          <Text className='font-bold text-[#4DC6FC] text-2xl text-center'>Machine learning {'\n'} from disaster</Text>
        </View>
        <TouchableOpacity style={styles.team} onPress={() => navigation.navigate('Team')}>
          <Text style={styles.teamtext} className='text-white text-lg'>See team</Text>
          <Image source={require('../assets/icons/user.png')} style={{tintColor: 'white'}} />
        </TouchableOpacity>
      </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.cuadro} onPress={() => navigation.navigate('Description')}>
            <Text className='font-bold text-white text-lg text-center p-6'>Problem {'\n'}description</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cuadro} onPress={() => navigation.navigate('Resolution')}>
            <Text className='font-bold text-white text-lg text-center p-6'>Resolution {'\n'}importance</Text>
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>
    </ImageBackground>
  )
}