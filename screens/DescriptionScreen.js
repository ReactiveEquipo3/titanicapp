import { TouchableOpacity, View, Text, ScrollView, SafeAreaView, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function DescriptionScreen() {

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
      <Text className='font-bold text-gray-300 text-lg font-light text-xl text-center p-2'>Problem description</Text>
    </SafeAreaView>
    <ScrollView>
            <View className='pl-2'> 
            <View className='pl-2 pt-8'>
              <Text className="font-bold text-xl">The challenge</Text>
            </View>
            <View className='flex-column px-2'>
            <Text>&emsp;</Text>
              <Text className='text mb-1 leading-8'>The sinking of the Titanic is one of the most infamous shipwrecks in history.

On April 15, 1912, during her maiden voyage, the widely considered “unsinkable” RMS Titanic sank after colliding with an iceberg. Unfortunately, there weren’t enough lifeboats for everyone onboard, resulting in the death of 1502 out of 2224 passengers and crew.

While there was some element of luck involved in surviving, it seems some groups of people were more likely to survive than others.

In this challenge, we ask you to build a predictive model that answers the question: “what sorts of people were more likely to survive?” using passenger data (ie name, age, gender, socio-economic class, etc).</Text>
            </View>
          </View>
          <View className='items-center mt-4 mb-10'>
              <Image source={require('../assets/imgs/img-2.jpg')} style={{
                height: 200,
                width: 250,
                borderRadius: 15,
              }}/>
            </View>
      </ScrollView>
    </>
  )
}