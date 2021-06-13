import React, {useState, createRef} from "react";
import { View, FlatList, useWindowDimensions } from 'react-native';
import OptionsBar from './OptionsBar.js';
import OptionScreen from "./OptionScreen.js";
import OptionScreenSubmit from './OptionScreenSubmit.js';
import styles from '../style/Onboarding.js';


export default function Onboarding(props) {
    const {width} = useWindowDimensions();
    const scroller = createRef();

    const scrollAndActiveItem = (patientChoice, indexToScroll) => {
      scroller.current.scrollToOffset({offset: width * indexToScroll});
      props.onOptionClick(patientChoice); 
    }

    return (
        <View style={styles.container}>
          {/* {!endReached? <OptionsBar options={props.barOptions}/>: null} */}
          <OptionsBar options={props.barOptions}/>
          <FlatList
            data={props.options}
            horizontal
            ref={scroller}
            renderItem={({ item, index }) =>
             <OptionScreen
              option={item}
              onOptionClick={(patientChoice) => scrollAndActiveItem(patientChoice, index + 1)}/>}
            ListFooterComponent={() => <OptionScreenSubmit onSubmit={props.onSubmit}/>}
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator
          />
        </View>
    );
}
