import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcde67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
        width: 90,
        height: 90,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 18
    },
    optionList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 60,
    },
    textButton: {
        width: 140,
        height: 60,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 6,
        borderRadius: 5,
        borderStyle: 'dotted',
        backgroundColor: "#3db7e3",
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-condensed',
    }
});

export default styles;