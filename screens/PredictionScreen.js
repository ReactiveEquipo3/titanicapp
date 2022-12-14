import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard, ActivityIndicator, StyleSheet } from 'react-native'
import { TextInput, Button, Provider, DefaultTheme } from 'react-native-paper'
import DropDown from "react-native-paper-dropdown"
import { Formik } from 'formik'
import axios from 'axios'

export default function PredictionScreen() {

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4DC6FC',
      accent: '#f1c40f',
    },
  };

  const [prediction, setPrediction] = useState('');

  const [loading, setLoading] = useState(false);

  const [showAlgorithmDropDown, setShowAlgorithmDropDown] = useState(false);
  const [algorithm, setAlgorithm] = useState('');

  const algorithmList = [
    {
      label: 'K-Nearest Neighbor',
      value: 'kNN',
    },
    {
      label: 'Random Forest',
      value: 'RandomForest',
    }
  ]

  const [showPclassDropDown, setShowPclassDropDown] = useState(false);
  const [pclass, setPclass] = useState('');

  const classList = [
    {
      label: '1st',
      value: 1,
    },
    {
      label: '2nd',
      value: 2,
    },
    {
      label: '3rd',
      value: 3,
    },
  ]

  const [showGenderDropDown, setShowGenderDropDown] = useState(false);
  const [gender, setGender] = useState('');

  const genderList = [
      {
        label: "Male",
        value: 1,
      },
      {
        label: "Female",
        value: 0,
      }
    ];

  const [showPortDropDown, setShowPortDropDown] = useState(false);
  const [port, setPort] = useState('');

  const portList = [
      {
        label: "Cherbourg",
        value: 0,
      },
      {
        label: "Queenstown",
        value: 1,
      },
      {
        label: "Southampton",
        value: 2,
      }
    ];
  return (
    <Provider theme={theme}>
      <SafeAreaView className='bg-gray-400'>
        <Text className='font-bold text-gray-300 text-lg font-light text-xl text-center p-2'>Prediction</Text>
      </SafeAreaView>
      <Formik
        // onSubmit = {values => console.log(values)}
        initialValues = {{age: ''}}
        onSubmit = { values => {
          setLoading(true);
          axios.post(`http://192.168.31.242:5000/${algorithm}`,{
            Pclass: parseInt(pclass),
            Sex: parseInt(gender),
            Age: parseInt(values.age),
            Embarked: parseInt(port)
          })
          .then(response => { setPrediction(response.data); setLoading(false); })
          .catch(error => console.log(error))}}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View className='px-5 pt-5'>
                <View className='mb-2'>
                  <DropDown
                  label={"Algorithm"}
                  mode={"outlined"}
                  visible={showAlgorithmDropDown}
                  showDropDown={() => setShowAlgorithmDropDown(true)}
                  onDismiss={() => setShowAlgorithmDropDown(false)}
                  value={algorithm}
                  setValue={setAlgorithm}
                  list={algorithmList}
                  />
                </View>
                <View className='mb-2'>
                  <DropDown
                  label={"Passenger Class"}
                  mode={"outlined"}
                  visible={showPclassDropDown}
                  showDropDown={() => setShowPclassDropDown(true)}
                  onDismiss={() => setShowPclassDropDown(false)}
                  value={pclass}
                  setValue={setPclass}
                  list={classList}
                  />
                </View>
                <View className='mb-2'>
                  <TextInput
                  label="Age"
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  value={values.age}
                  keyboardType='numeric'
                  mode='outlined'
                  style={{ color: 'white' }}
                  />
                </View>
                <View className='mb-2'>
                  <DropDown
                  label={"Sex"}
                  mode={"outlined"}
                  visible={showGenderDropDown}
                  showDropDown={() => setShowGenderDropDown(true)}
                  onDismiss={() => setShowGenderDropDown(false)}
                  value={gender}
                  setValue={setGender}
                  list={genderList}
                  />
                </View>
                <View className='mb-4'>
                  <DropDown
                  label={"Port of Embarkation"}
                  mode={"outlined"}
                  visible={showPortDropDown}
                  showDropDown={() => setShowPortDropDown(true)}
                  onDismiss={() => setShowPortDropDown(false)}
                  value={port}
                  setValue={setPort}
                  list={portList}
                  />
                </View>
                <Button onPress={() => {handleSubmit(); Keyboard.dismiss(); }} mode="contained" title='Submit' dark={true}>
                    Submit
                </Button>
                  {
                    prediction !== '' && (
                      <View className='mt-6 content-center flex flex-col items-center'>
                        <Text style={{fontSize: 22}} className='font-bold'>Prediction</Text>
                        <Text style={{fontSize: 20}}>The passenger {prediction[0] === 0 ? 'survived' : 'died'}</Text>
                      </View>
                    )
                  }
              </View>
            </TouchableWithoutFeedback>
          )}
        </Formik>
        {loading &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' />
          </View>
        }
    </Provider>
  )
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
});