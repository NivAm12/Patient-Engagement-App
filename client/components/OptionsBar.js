import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styles from '../style/OptionsBar.js';


export default function OptionsBar(props) {

  const createBarItems = () => {
    // check if it's valid to map the object:
    if (Array.isArray(props.options)) {
      // create the bar items:
      return React.Children.toArray(props.options.map((item, index) => {
        return (
          <TouchableOpacity
           style={styles.barItem}
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

  return (
  <View style={styles.container}>
    {createBarItems()}
  </View>);
}
