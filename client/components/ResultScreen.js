import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


export default function ResultScreen() {
    return (
        <View style={styles.container}>
          <Text>ResultScreen</Text>
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