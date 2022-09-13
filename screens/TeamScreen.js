import { TouchableOpacity, View, Text, ScrollView, SafeAreaView, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'





export default function TeamScreen() {

const navigation = useNavigation();

const styles = StyleSheet.create({
  imgs: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },

})

  return (
    <>
    <SafeAreaView className='bg-gray-400'>
    
      <TouchableOpacity
      onPress={navigation.goBack}
      className='absolute top-12 left-5 p-2 z-10'>
        <Image  source={require('../assets/icons/arrow-back.png')}
        style={{
          tintColor: 'white',
          height: 25,
          width: 25,
          
        }}
      />
      </TouchableOpacity>
      <Text className='font-bold text-gray-300 text-lg font-light text-xl text-center p-2'>Team members</Text>
    </SafeAreaView>
    <ScrollView>
        <View className='mt-7 flex flex-row flex-1 justify-evenly'>
          <View className='self-start items-center'>
            <Image style={styles.imgs} source={require('../assets/imgs/inigo.jpg')} />
            <Text className="font-bold text-xl text-center">Iñigo {'\n'} Zepeda</Text>
            <Text className='text-center mb-1'>A01023684</Text>
          </View>
          <View className='self-start items-center'>
            <Image style={styles.imgs} source={require('../assets/imgs/axel.jpg')} />
            <Text className="font-bold text-xl text-center">Axel {'\n'} González</Text>
            <Text className='text-center mb-1'>A01652775</Text>
          </View>
        </View>
        <View className='mt-4 flex flex-row flex-1 justify-evenly'>
          <View className='self-start items-center'>
            <Image style={styles.imgs} source={require('../assets/imgs/ale.jpg')} />
            <Text className="font-bold text-xl text-center">Alejandro {'\n'} Hernández</Text>
            <Text className='text-center mb-1'>A01658969</Text>
          </View>
          <View className='self-start items-center'>
            <Image style={styles.imgs} source={require('../assets/imgs/marcia.jpg')} />
            <Text className="font-bold text-xl text-center">Marcia {'\n'} Lechuga</Text>
            <Text className='text-center mb-1'>A01652732</Text>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
