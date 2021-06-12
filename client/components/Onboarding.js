import React, {useState} from "react";
import { View, FlatList } from 'react-native';
import OptionsBar from './OptionsBar.js';
import OptionScreen from "./OptionScreen.js";
import OptionScreenSubmit from './OptionScreenSubmit.js';
import styles from '../style/Onboarding.js';


export default function Onboarding(props) {
  
    const [endReached, setEndReached] = useState(false);

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
          {!endReached? <OptionsBar options={createOptionsBarData()}/>: null}
          {/* <OptionsBar options={createOptionsBarData()}/> */}
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
