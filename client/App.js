import React, {useEffect, useState, useRef} from 'react';
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

  // METHODS:
  useEffect(() =>{
    async function fetchData() {
      // get the options to choose for patient:
      const {data} = await axios.get('http://10.0.2.2:5000/api/patientOptions');
      setPatientOptions(data);
    }
    fetchData();
  }, [])

  handlePatientChoice = (patientChoice) => {
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

  // RENDER:
  return (
    <NavigationContainer>
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
          {() => <Onboarding options={patientOptions} onOptionClick={handlePatientChoice}/>}
        </Stack.Screen>
        <Stack.Screen
          name="Result"
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
