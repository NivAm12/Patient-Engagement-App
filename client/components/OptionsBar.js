import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styles from '../style/OptionsBar.js';


export default function OptionsBar(props) {
  // create the bar items:
  const createBarItems = () => {
    // check if it's valid to map the object:
    if (Array.isArray(props.options)) {
      return React.Children.toArray(props.options.map((item) => {
        return (
          <TouchableOpacity style={styles.barItem}>
            <Text
             style={styles.barText}>{item.title.toUpperCase()}</Text>
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
