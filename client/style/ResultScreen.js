import { StyleSheet} from 'react-native';


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

export default styles;