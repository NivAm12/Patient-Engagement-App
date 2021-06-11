import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import OptionsBar from './OptionsBar.js';
import OptionScreen from "./OptionScreen.js";

export default function Onboarding(props) {
    const createOptionsBarData = ()=> {
      const optionsBarData = [];

      // take the option title from the data:
      props.options.forEach(({key}) => {
        optionsBarData.push({title: key});
      });

      return optionsBarData;
    };

    return (
        <View style={styles.container}>
          <OptionsBar options={createOptionsBarData()}/>
          <FlatList
            data={props.options}
            horizontal
            renderItem={({ item }) => <OptionScreen option={item}/>}
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator
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