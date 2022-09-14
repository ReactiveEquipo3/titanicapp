import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function PredictionScreen() {
  return (
    <SafeAreaView className='bg-gray-400'>
      <Text className='font-bold text-gray-300 text-lg font-light text-xl text-center p-2'>Selection</Text>
        <ScrollView>
        <View className='bg-blue pl-2 border-gray-200'>
          <View> 
            <View className='pl-2 pt-8'>
              <Text className="font-bold text-xl">Random Forest</Text>
            </View>
            <View className='flex-column px-2'>
            <Text>&emsp;</Text>
              <Text className='text mb-1'>Se escogió Random Forest primeramente por los resultados obtenidos en kaggle y en accuracy, siendo mejores que los obtenidos con kNN.</Text>
              <Text className='text mb-1'>Tanto la curva ROC como la matriz de confusión, son mejores que las obtenidas con kNN, es decir, este modelo distingue mejor los que sobreviven y los que no. En otras palabras, identificar un poco mejor las que sobrevivieron, sobre las que realmente sobrevivieron (sensibilidad); y las personas que no sobrevivieron, sobre las que en efecto no sobrevivieron (especificidad).</Text>
              <Text className='text mb-1'>A si mismo, el AUC del Random Forest fue mejor, en sentido de este modelo es más probable que distinga correctamente entre los que si sobreviven y los que no.</Text>
                </View>
            </View>
        </View>
    <ScrollView/>
    </SafeAreaView>
  )
}
