import React, {useEffect, useState, useRef, createRef} from 'react';
import LandingScreen from "./components/LandingScreen.js"
import Onboarding from "./components/Onboarding.js"
import ResultScreen from "./components/ResultScreen.js"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from "axios";


const Stack = createStackNavigator();

export default function App() {

  // DATA:
  const [patientOptions, setPatientOptions] = useState(null);
  const patientChoices = useRef([]);
  const patientResult = useRef(null);
  const navigator = createRef();

  // METHODS:
  useEffect(() =>{
    async function fetchData() {
      // get the options to choose for patient:
      const {data} = await axios.get('http://10.0.2.2:5000/api/patientOptions');
      setPatientOptions(data);
    }
    fetchData();
  }, [])

  const handlePatientChoice = (patientChoice) => {
    let patientChoicesCopy = [...patientChoices.current];
    
    // check if the choice already exists:
    const patientChoiceToUpdateIndex = patientChoicesCopy.findIndex(choice => choice.key === patientChoice.key);

    if(patientChoiceToUpdateIndex != -1){
      // update the choice:
      patientChoicesCopy[patientChoiceToUpdateIndex].choice = patientChoice.choice;
    }
    else{
      // create the choice object:
      patientChoicesCopy.push({key: patientChoice.key, choice: patientChoice.choice});
    }

    patientChoices.current = [...patientChoicesCopy];
  }

  const handlePatientSubmit = async() => {
    let isValidToSubmit = true;

    // check if all of the options has been selected:
    patientOptions.forEach(option => {
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
    }
  } 

  // RENDER:
  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ title: '', headerShown: false }}
          
        />
        <Stack.Screen
          name="Onboarding"
          options={{ title: '', headerShown: false }}
        >
          {() =>
           <Onboarding
            options={patientOptions}
            onOptionClick={handlePatientChoice}
            onSubmit={handlePatientSubmit}  
            />
          }
        </Stack.Screen>
        <Stack.Screen
          name="Result"
          options={{ title: '', headerShown: false }}
        >
          {() => <ResultScreen data={patientResult.current}/>}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
