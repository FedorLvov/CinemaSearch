import React from 'react';
import { Text, View } from 'react-native';
import {Color, Constants, normalize, TextStyles} from "../../../../constants/UIElemetns";

const StatisticCard = ({ number, text }) => (
  <View
    activeOpacity={Constants.activeOpacity}
    style={{
      height: Constants.width/2 - Constants.borderMargin - 2.5,
      width: Constants.width/2 - Constants.borderMargin - 2.5,
      backgroundColor: number.indexOf('+') === 0 ? Color.white : Color.lightBlue,
      borderRadius: 5,
      padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }}
  >
    <Text
      style={[
        TextStyles.title,
        {
          fontSize: normalize(30),
          color: number.indexOf('+') === 0 ? Color.black : Color.white
        }
      ]}
    >
      {number}
    </Text>
    <Text
      style={[
        TextStyles.body,
        {
          fontSize: normalize(12),
          color: number.indexOf('+') === 0 ? Color.black : Color.white,
        }
      ]}
    >
      {text}
    </Text>
  </View>
);

export default StatisticCard;