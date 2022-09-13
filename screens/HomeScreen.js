import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation} from '@react-navigation/native';


export default function HomeScreen({ navigation }) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  return (
    <SafeAreaView className='bg-gray-400' style={styles.container}>
      <Text className='font-bold text-gray-300 text-lg'>HomeScreeeeeen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Description')}>
        <Text>Descripción del problema</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}