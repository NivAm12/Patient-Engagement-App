import React, {useState} from "react";
import { View, FlatList } from 'react-native';
import OptionsBar from './OptionsBar.js';
import OptionScreen from "./OptionScreen.js";
import OptionScreenSubmit from './OptionScreenSubmit.js';
import styles from '../style/Onboarding.js';


export default function Onboarding(props) {
  
    const [endReached, setEndReached] = useState(false);

    return (
        <View style={styles.container}>
          {/* {!endReached? <OptionsBar options={props.barOptions}/>: null} */}
          <OptionsBar options={props.barOptions}/>
          <FlatList
            data={props.options}
            horizontal
            renderItem={({ item }) => <OptionScreen option={item} onOptionClick={props.onOptionClick}/>}
            ListFooterComponent={() => <OptionScreenSubmit onSubmit={props.onSubmit}/>}
            pagingEnabled
            bounces={false}
            onEndReached={()=> setEndReached(true)}
            showsHorizontalScrollIndicator
          />
        </View>
    );
}
