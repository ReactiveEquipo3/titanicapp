import { TouchableOpacity, View, Text, ScrollView, SafeAreaView, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ResolutionScreen() {

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
      <Text className='font-bold text-gray-300 text-lg font-light text-xl text-center p-2'>Resolution importance</Text>
    </SafeAreaView>
    <ScrollView>
            <View className='pl-2'> 
            <View className='pl-2 pt-8'>
              <Text className="font-bold text-xl">Future predictions</Text>
            </View>
            <View className='flex-column px-2'>
            <Text>&emsp;</Text>
              <Text className='text mb-1 leading-8'>It is important to do these predictions in order to be prepared for future situations that may have similarities with the sinking of the Titanic.
              In this case, these are prevention methods that the ship team can know before the departure of the ship. Knowing the abilities of their passengers lets them know the security measures they should implement
              and keep in mind.  </Text>
            </View>            
          </View>
          <View className='items-center mt-4 '>
              <Image source={require('../assets/imgs/img-1.jpeg')} style={{
                height: 200,
                width: 250,
                borderRadius: 15,
              }}/>
            </View>
      </ScrollView>
    </>
  )
}