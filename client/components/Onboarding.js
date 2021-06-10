import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


export default function Onboarding(props) {
  console.log(props.options);
    return (
        <View style={styles.container}>
          <FlatList
            data={props.options}
            renderItem={({item}) => <Text>{item.key}</Text>}
            horizontal
          />
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
});