import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";
import { Icon } from "react-native-elements";


export default function OptionsBar(props) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={props.options}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.barItem}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcde67",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexGrow: 0
  },
  barItem: {
     width: 100,
     height: 100,
    borderWidth: 2,
    justifyContent: "center",
    marginTop: 5,
    //alignItems: "center",
    marginLeft: 10,
    // padding: 8,
    // borderRadius: 20,
    backgroundColor: "#5bccf6",
  },
});
