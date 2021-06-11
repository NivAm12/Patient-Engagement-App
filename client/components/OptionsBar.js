import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";
import { Icon } from "react-native-elements";

export default function OptionsBar(props) {
  const createBarItems = () => {
    if (Array.isArray(props.options)) {
      return props.options.map((item) => {
        return (
          <TouchableOpacity style={styles.barItem}>
            <Text
             style={styles.barText}>{item.title}</Text>
          </TouchableOpacity>
        );
      });
    }
  };

  return (
  <View style={styles.container}>
    {createBarItems()}
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcde67",
    flexDirection: 'row',
    marginTop: 35
    //alignItems: "flex-end",
    //display: "flex"
    // justifyContent: "center",
  },
  barItem: {
    width: 95,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
    padding: 8,
    borderRadius: 15,
    backgroundColor: "#e34444",
  },
  barText: {
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
  }
});
