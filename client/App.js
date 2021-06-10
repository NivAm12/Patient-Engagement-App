import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import LandingScreen from "./components/LandingScreen.js"
import Onboarding from "./components/Onboarding.js"
import ResultScreen from "./components/ResultScreen.js"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {address} from "ip";


import axios from "axios";


const Stack = createStackNavigator();
export default function App() {

  const [icon, setIcon] = useState(null);

  useEffect(() =>{
    async function fetchData() {
      const {data} = await axios.get(`http://${address()}:5000/api/patientOptions/gender`);
      const iconToset = `data:image/png;base64,${data.options[1].icon}`;
      
      setIcon(iconToset)
    }
    fetchData();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );



  // return (
  //   <View style={styles.container}>
  //     <Image  style={{width: 150, height: 180}} source={{uri: icon}}/>
  //     <Text>sdfsdfdddds</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcde67',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
