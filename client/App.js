import React, {useEffect, useState} from 'react';
import LandingScreen from "./components/LandingScreen.js"
import Onboarding from "./components/Onboarding.js"
import ResultScreen from "./components/ResultScreen.js"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from "axios";


const Stack = createStackNavigator();

export default function App() {

  const [patientOptions, setPatientOptions] = useState(null);

  useEffect(() =>{
    async function fetchData() {
      // get the options to choose for patient:
      const {data} = await axios.get('http://10.0.2.2:5000/api/patientOptions');
      setPatientOptions(data);
      // const {data} = await axios.get(`http://10.0.2.2:5000/api/patientOptions/gender`);
      // const iconToset = `data:image/png;base64,${data.options[1].icon}`;
      
      // setIcon(iconToset)
    }
    fetchData();
  }, [])

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
          {() => <Onboarding options={patientOptions} />}
        </Stack.Screen>
        <Stack.Screen
          name="Result"
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
