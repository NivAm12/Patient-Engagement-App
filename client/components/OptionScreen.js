import React from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, Button } from 'react-native';
import styles from '../style/OptionScreen.js';


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
                        <TouchableOpacity
                         style={styles.textButton}
                         onPress={() => props.onOptionClick({key: props.option.key, choice: item.text})}
                         >
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
