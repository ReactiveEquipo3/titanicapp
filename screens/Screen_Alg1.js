import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



export default function Screen_Alg1() {
const navigation = useNavigation()

  return (
    <>
    <SafeAreaView className='bg-gray-400'>
      <Text className='font-bold text-gray-300 text-lg font-light text-xl text-center p-2'>Algorithm 1 - Random Forest</Text>
    </SafeAreaView>

    <ScrollView>
        <View className='bg-blue pl-2 border-gray-200'>
          <View> 
            <View className='pl-2 pt-8'>
              <Text className="font-bold text-xl">Justification</Text>
            </View>
            <View className='flex-column px-2'>
            <Text>&emsp;</Text>
              <Text className='text mb-1'>Como primer algoritmo, se decidió usar Random Forest. Este método consiste en crear muchos árboles para luego usarlos en la predicción de la variable de interés. Se decidió usar Random Forest ya que nos da la posibilidad de tener Y predicciones,  una por cada B árbol, basados en nuestras X como Age, Sex, P-class y Embarked. Una vez teniendo las Y predicciones, se puede unificar por mayoría de votos , es decir, mayor incidencia. </Text>
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
              <Text className='text mb-1'>0.8268</Text>
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
              <Text className='text mb-1'>0.78229</Text>
            </View>
          </View>
        </View>
        
        <View className='bg-blue pl-2'>
          <View> 
            <View className='pl-2 pb-3 pt-0 '>
              <Text>&emsp;</Text>
              <Text className="font-bold text-xl">Confusion matrix</Text>
              <Image
              source={ require('../assets/imgs/matrixr.png') }
              style={{
                height: 290,
                width: 350,
              }}
              />
            </View>
          </View>
        </View>

        <View className='bg-blue pl-2'>
          <View> 
            <View className='pl-2 pb-3 pt-0 '>
              <Text>&emsp;</Text>
              <Text className="font-bold text-xl">ROC and AUC</Text>
              <Image
              source={ require('../assets/imgs/aucr.png') }
              style={{
                height: 290,
                width: 350,
              }}
              />
            </View>
          </View>
        </View>

       

      </ScrollView>
    </>
  )
}
