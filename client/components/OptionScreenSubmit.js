import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, useWindowDimensions} from "react-native";
import { Icon} from 'react-native-elements'
import styles from '../style/OptionScreenSubmit.js'


export default function OptionScreenSubmit(props) {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.header}>AMAZING! </Text>
      <Text style={styles.content}>Were done, you can procced to get the full summary or scroll back and change the selections</Text>
      <TouchableOpacity
        onPress={() => props.onSubmit()}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Submit</Text>
        <Icon type='evilicon' name="check" size={45} />
      </TouchableOpacity>

    </View>
  );
}
