import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from "axios";


export default function App() {

  const [icon, setIcon] = useState(null);

  useEffect(() =>{
    async function fetchData() {
      const {data} = await axios.get('http://192.168.1.20:5000/api/patientOptions/gender');
      const iconToset = data.options[0].icon;
      console.log(iconToset);
      setIcon(iconToset)
    }
    fetchData();
  }, [])


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={{uri: "data:image/png;base64,"+icon}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
