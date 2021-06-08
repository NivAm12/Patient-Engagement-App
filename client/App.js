import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from "axios";


export default function App() {

  const [icon, setIcon] = useState(null);

  useEffect(() =>{
    async function fetchData() {
      const {data} = await axios.get('http://192.168.1.20:5000/api/patientOptions/gender');
      const iconToset = `data:image/png;base64,${data.options[1].icon}`;

      setIcon(iconToset)
    }
    fetchData();
  }, [])


  return (
    <View style={styles.container}>

      <Image  style={{width: 150, height: 180}} source={{uri: icon}}/>
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
