import React, {useState, createRef} from "react";
import { View, FlatList, useWindowDimensions } from 'react-native';
import OptionsBar from './OptionsBar.js';
import OptionScreen from "./OptionScreen.js";
import OptionScreenSubmit from './OptionScreenSubmit.js';
import styles from '../style/Onboarding.js';


export default function Onboarding(props) {
    // DATA:
    const {width} = useWindowDimensions();
    const [optionBarSelected, setOptionBarSelected] = useState(0);
    const scroller = createRef();

    // METHODS:
    const scrollAndActiveItem = (patientChoice, indexToScroll) => {
      // scroll to next screen:
      scroller.current.scrollToOffset({offset: width * indexToScroll});

      // mark the option on the bar and trigger the listner action:
      setOptionBarSelected(indexToScroll);
      props.onOptionClick(patientChoice); 
    }

    const scrollOptionBar = (indexToScroll) => {
      // scroll to the chosen screen:
      scroller.current.scrollToIndex({index: indexToScroll});
      setOptionBarSelected(indexToScroll);
    }

    // RENDER:
    return (
        <View style={styles.container}>
          <OptionsBar
           options={props.barOptions}
           onClick={scrollOptionBar}
           selected={optionBarSelected}
           />
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
            scrollEnabled={false}
          />
        </View>
    );
}
