import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fcde67",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 70,
    },
    header: {
      marginBottom: 30,
      fontSize: 90,
      fontWeight: 'bold',
      fontFamily: 'sans-serif-condensed',
      marginLeft: 5,
      color: '#ab097a'
    },
    content: {
      fontSize: 30,
      alignItems: "center",
      fontFamily: 'sans-serif-condensed',
      marginBottom: 40,
      marginLeft: 10,
    },
    button: {
      width: 170,
      height: 70,
      borderWidth: 3,
      borderColor: '#fff',
      justifyContent: 'center',
      marginTop: 20,
      alignItems: 'center',
      padding: 8,
      borderRadius: 100,
      backgroundColor: '#5bccf6',
    },
    buttonTitle: {
      fontSize: 22,
      fontFamily: 'sans-serif-condensed',
    },
});

export default styles;
