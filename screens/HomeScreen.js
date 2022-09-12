import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation} from '@react-navigation/native';


export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-gray-400'>
      <Text className='font-bold text-gray-300 text-lg'>HomeScreeeeeen</Text>
    </SafeAreaView>
  )
}