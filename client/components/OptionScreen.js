import React from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native';


export default function OptionScreen(props) {  
    const {width} = useWindowDimensions();
    
    const createOptionsView = () =>{
        if(Array.isArray(props.option.options)){
            return props.option.options.map((item) => {
                return (
                    <View>
                        <Image 
                        source={{uri: `data:image/png;base64,${item.icon}`}}
                        style={styles.icon}
                        />
                        <TouchableOpacity style={styles.textButton}>
                        <Text
                        style={styles.text}>{item.text}</Text>
                        </TouchableOpacity>
                    </View>
                );
            });
        }
    };

    return (
        <View style={styles.container, {width}}>
          <View style={styles.optionList}>
            {createOptionsView()}
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcde67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 10
    },
    optionList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 40
    },
    textButton: {
        width: 140,
        height: 60,
        //marginTop: 10,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderRadius: 5,
        borderColor: '#42fa14',
        borderStyle: 'dashed',
        backgroundColor: "#3db7e3",
    }
});