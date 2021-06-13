import React, { useEffect, useState, useRef, createRef } from "react";
import LandingScreen from "./components/LandingScreen.js";
import Onboarding from "./components/Onboarding.js";
import {Alert} from 'react-native';
import ResultScreen from "./components/ResultScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

const Stack = createStackNavigator();

export default function App() {
  // DATA:
  const patientOptions = useRef(null);
  const [barOptions, setBarOptions] = useState([]);
  const patientChoices = useRef([]);
  const patientResult = useRef(null);
  const navigator = createRef();

  // METHODS:
  useEffect(() =>{
    fetchData();
  }, [])


  const fetchData = async() => {
    // get the options to choose for patient:
    try{
      const {data} = await axios.get('http://10.0.2.2:5000/api/patientOptions');
      patientOptions.current = data;
      setBarOptions(createbarOptions());
    }
    catch(err){
      console.log(err);
      Alert.alert("Error while connecting to the server");
    }
  }

  const createbarOptions = ()=> {
    const barOptions = [];

    // take the option title from the data:
    patientOptions.current.forEach(({key}) => {
      barOptions.push({title: key});
    });

    return barOptions;
  };

  const handlePatientChoice = (patientChoice) => {
    let patientChoicesCopy = [...patientChoices.current];
    let barOptionsCopy = [...barOptions];
    
    // check if the choice already exists:
    const patientChoiceToUpdateIndex = patientChoicesCopy.findIndex(choice => choice.key === patientChoice.key);
    console.log(patientChoice)
    if(patientChoiceToUpdateIndex != -1){
      // update the choice:
      patientChoicesCopy[patientChoiceToUpdateIndex].choice = patientChoice.choice;
      barOptionsCopy[patientChoiceToUpdateIndex].title = patientChoice.choice;
    }
    else{
      // create the choice object:
      patientChoicesCopy.push({key: patientChoice.key, choice: patientChoice.choice});
      const indexToReplace = barOptionsCopy.findIndex(option => option.title == patientChoice.key);
      barOptionsCopy[indexToReplace].title = patientChoice.choice;
    }

    // update the data:
    patientChoices.current = [...patientChoicesCopy];
    setBarOptions([...barOptionsCopy]);
  }

  const handlePatientSubmit = async() => {
    let isValidToSubmit = true;

    // check if all of the options has been selected:
    patientOptions.current.forEach(option => {
      isValidToSubmit = patientChoices.current.find(item => item.key == option.key) == null ?
        false : isValidToSubmit;
    });

    // sent the results to the server and show them on result screen:
    if(isValidToSubmit){
      await sendAndFetchNewPatient();
      navigator.current.navigate('Result');
    }
  }

  const sendAndFetchNewPatient = async() => {
    try{
      // create a new patient:
      const dataToConvert = [];

      patientChoices.current.map((item) => {
        dataToConvert.push({[item.key]: item.choice});
      });
      const patientJson = Object.assign({}, ...dataToConvert);

      // send and fetch the new patient:
      let {data} = await axios.post('http://10.0.2.2:5000/api/patient', patientJson);
      delete data["__v"];
      delete data["_id"];
      patientResult.current = data;
    }
    catch(err){
      console.log(err.message);
      Alert.alert(err.message);
    }
  }

  const resetData = () => {
    patientChoices.current = [];
    setBarOptions(createbarOptions());
    navigator.current.navigate('Landing');
  }

  // RENDER:
  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          options={{ title: "", headerShown: false }}
        >
          {() => (
            <LandingScreen
              onSubmit={() => navigator.current.navigate("Onboarding")}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Onboarding"
          options={{ title: "", headerShown: false }}
        >
          {() => (
            <Onboarding
              options={patientOptions.current}
              barOptions={barOptions}
              onOptionClick={handlePatientChoice}
              onSubmit={handlePatientSubmit}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Result" options={{ title: "", headerShown: false }}>
          {() => (
            <ResultScreen
              data={patientResult.current}
              onSubmit={resetData}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
