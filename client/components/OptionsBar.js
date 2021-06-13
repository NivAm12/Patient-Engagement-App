import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styles from '../style/OptionsBar.js';


export default function OptionsBar(props) {

  //  METHODS:
  const createBarItems = () => {
    // check if it's valid to map the object:
    if (Array.isArray(props.options)) {
      // create the items:
      return React.Children.toArray(props.options.map((item, index) => {
        // mark the selected item:
        let borderWidth = (index == props.selected && props.selected != null? 5 : 2);
       
        // create the bar item:
        return (
          <TouchableOpacity
           style={[styles.barItem, {borderWidth}]}
           onPress={() => props.onClick(index)}
           >
            <Text
              style={styles.barText}>
            {item.title.toUpperCase()}
            </Text> 
          </TouchableOpacity>
        );
      }));
    }
  };

  // RENDER:
  return (
  <View style={styles.container}>
    {createBarItems()}
  </View>);
}
