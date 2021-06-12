import React from "react";
import {Text, View, TouchableOpacity } from 'react-native';
import { Icon} from 'react-native-elements';
import styles from '../style/ResultScreen.js';


export default function ResultScreen(props) {
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
          <TouchableOpacity
           style={styles.button}
           onPress={() => props.onSubmit()}
           >
            <Text style={styles.buttonTitle}>Start a new report</Text>
            <Icon type='evilicon' name="redo" size={45} />
          </TouchableOpacity>
        </View>
    );
}
