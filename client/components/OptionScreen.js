import React from "react";
import { Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import styles from '../style/OptionScreen.js';


export default function OptionScreen(props) {  
    const {width} = useWindowDimensions();
    
    // METHODS:
    const createOptionsView = () =>{
        // check if it's valid to map the array:
        if(Array.isArray(props.option.options)){
            return React.Children.toArray(props.option.options.map((item) => {
                // create the item:
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
            }));
        }
    };

    // RENDER:
    return (
        <View style={styles.container, {width}}>
          <View style={styles.optionList}>
            {createOptionsView()}
          </View>
        </View>
    );
}
