import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import { Icon} from 'react-native-elements'
import styles from '../style/LandingScreen.js'


export default function LandingScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeHeader}>Welcome!</Text>
      <Text style={styles.contentHeader}>Will ask you some questions to make your visit a little bit better.</Text>
      <TouchableOpacity
        onPress={() => props.onSubmit()}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Lets get started</Text>
        <Icon type='evilicon' name="arrow-right" size={45} />
      </TouchableOpacity>

    </View>
  );
}