import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Screen_Alg2() {
const navigation = useNavigation()

  return (
    <>
    <SafeAreaView className='bg-gray-400'>
      <Text className='font-bold text-gray-300 text-lg font-light text-xl text-center p-2'>Algorithm 2 - KNN</Text>
    </SafeAreaView>

    <ScrollView>
        <View className='bg-blue pl-2 border-gray-200'>
          <View> 
            <View className='pl-2 pt-8'>
              <Text className="font-bold text-xl">Justification</Text>
            </View>
            <View className='flex-column px-2'>
            <Text>&emsp;</Text>
              <Text className='text mb-1'>Como segundo algoritmo, se decidió usar k vecinos más cercanos, también conocido como kNN, ya que es un clasificador de aprendizaje supervisado no paramétrico, que utiliza la proximidad para hacer clasificaciones y/o predicciones sobre la agrupación de un punto de datos individual. Este método nos permite nos permite aproximar, es decir, mediante etiquetas se hace un voto mayoritario, en otra palabras, se utiliza la etiqueta que se representa con más frecuencia alrededor de un punto de datos. </Text>
            </View>
          </View>
        </View>

        <View className='bg-blue pl-2 border-gray-200'>
          <View> 
            <View className='pl-2 pb-3 pt-0 '>
              <Text>&emsp;</Text>
              <Text className="font-bold text-xl">Precision obtained</Text>
            </View>
            <View className='flex-column px-2'>
            <Text>&emsp;</Text>
              <Text className='text mb-1'>0.7877</Text>
            </View>
          </View>
        </View>


        <View className='bg-blue pl-2 border-gray-200'>
          <View> 
            <View className='pl-2 pb-3 pt-0 '>
              <Text>&emsp;</Text>
              <Text className="font-bold text-xl">Score of Kaggle</Text>
            </View>
            <View className='flex-column px-2'>
            <Text>&emsp;</Text>
              <Text className='text mb-1'>0.70813</Text>
            </View>
          </View>
        </View>
        
        <View className='bg-blue pl-2'>
          <View> 
            <View className='pl-2 pb-3 pt-0 '>
              <Text>&emsp;</Text>
              <Text className="font-bold text-xl">Confusion matrix</Text>
              <Image
              source={ require('../assets/imgs/matrixknn.png') }
              style={{
                height: 500,
                width: 600,
              }}
              />
            </View>
          </View>
        </View>

        <View className='bg-blue pl-2 border-gray-200'>
          <View> 
            <View className='pl-2 pb-3 pt-0 '>
              <Text>&emsp;</Text>
              <Text className="font-bold text-xl">ROC and AUC</Text>
              <Image
              source={ require('../assets/imgs/auckn.png') }
              style={{
                height: 400,
                width: 500,
              }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

