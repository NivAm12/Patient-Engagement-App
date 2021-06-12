import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fcde67",
      //alignItems: "center",
      //justifyContent: "center",
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
      borderWidth: 3,
      justifyContent: 'center',
      marginTop: 150,
      alignItems: 'center',
      marginLeft: 110,
      padding: 8,
      borderRadius: 100,
      backgroundColor: '#fff',
    },
    buttonTitle: {
      fontSize: 22,
      fontFamily: 'sans-serif-condensed',
    },
  });

export default styles;