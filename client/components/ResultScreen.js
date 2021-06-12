import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon} from 'react-native-elements'


export default function ResultScreen(props) {
  console.log(Object.keys(props.data))
  const formatPatientData = () => {
    const formatedData = [];

    Object.keys(props.data).map((key) => {
      formatedData.push(<Text style={styles.info}>{`${key.toLocaleUpperCase()}: ${props.data[key]}`}</Text>)
    });

    return formatedData;
  }
    return (
        <View style={styles.container}>
          <Text style={styles.header}> Patient Summary</Text>
          <View style={styles.infoList}>
          {formatPatientData()}
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTitle}>Start a new report</Text>
            <Icon type='evilicon' name="redo" size={45} />
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcde67',
      //alignItems: 'flex-start',
      //justifyContent: 'center',
      flexDirection: 'column',
      marginTop: 30
    },
    header: {
      marginBottom: 30,
      fontSize: 50,
      fontWeight: 'bold',
      fontFamily: 'sans-serif-condensed',
    },
    infoList: {
      backgroundColor: '#fff',
      borderRadius: 35,
      borderColor: 'black',
      borderWidth: 4,
      borderStyle: 'dotted'
    },
    info: {
      marginTop: 0,
      marginBottom: 10,
      fontSize: 30,
      marginLeft: 15,
      fontFamily: 'sans-serif-condensed',
    },
    button: {
      width: 170,
      height: 100,
      borderWidth: 3,
      borderColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 110,
      padding: 8,
      borderRadius: 100,
      marginTop: 30,
      backgroundColor: '#5bccf6',
    },
    buttonTitle: {
      fontSize: 20,
      fontFamily: 'sans-serif-condensed',
      marginTop: 15
      
    }
});