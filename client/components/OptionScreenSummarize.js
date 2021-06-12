import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, useWindowDimensions} from "react-native";
import { Icon} from 'react-native-elements'
// import styles from '../style/LandingScreen.js'


export default function OptionScreenSummarize({ navigation }) {
    const {width, height} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.welcomeHeader}>Welcome!</Text>
      <Text style={styles.contentHeader}>Will as</Text>
      <TouchableOpacity
        // navigate to the desire point
        onPress={() => navigation.navigate("Onboarding")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Lets get started</Text>
        <Icon type='evilicon' name="check" size={45} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fcde67",
      alignItems: "center",
      justifyContent: "center",
    },
    welcomeHeader: {
      marginTop: 40,
      marginBottom: 30,
      fontSize: 70,
      fontWeight: 'bold',
      fontFamily: 'sans-serif-condensed',
      marginLeft: 5,
    },
    contentHeader: {
      fontSize: 30,
      alignItems: "center",
      fontFamily: 'sans-serif-condensed',
      marginBottom: 40,
      marginLeft: 5,
    },
    button: {
      width: 170,
      height: 70,
      borderWidth: 2,
      justifyContent: 'center',
      marginTop: 150,
      alignItems: 'center',
      marginLeft: 110,
      padding: 8,
      borderRadius: 100,
      backgroundColor: '#5bccf6',
    },
    buttonTitle: {
      fontSize: 22,
      fontFamily: 'sans-serif-condensed',
    },
  });
