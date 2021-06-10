import React from "react";
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, Pressable} from "react-native";
import { Icon} from 'react-native-elements'



export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeHeader}>Welcome!</Text>
      <Text style={styles.contentHeader}>Will ask you some questions to make your visit a little bit better.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Onboarding")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Lets get started</Text>
        <Icon type='evilicon' name="arrow-right" size={45} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcde67",
    //alignItems: "center",
    //justifyContent: "center",
  },
  welcomeHeader: {
    marginTop: 40,
    marginBottom: 5,
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
