import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation} from '@react-navigation/native';


export default function HomeScreen() {

  const navigation = useNavigation();


  return (
    <SafeAreaView className='bg-gray-400'>
      <Text className='font-bold text-gray-300 text-lg'>HomeScreeeeeen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Description')}>
        <Text>Descripción del problema</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}