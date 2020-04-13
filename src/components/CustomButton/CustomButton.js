import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from "../../screens/Main/Styles";
import {Constants} from "../../constants/UIElemetns";

const CustomButton = ({
  text = '',
  containerStyle = {},
  textStyle = {},
  activeOpacity = false,
  onPress = () => {},
}) => (
  <TouchableOpacity
    activeOpacity={activeOpacity ? activeOpacity : Constants.activeOpacity}
    style={containerStyle}
    onPress={() => onPress()}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

export default CustomButton;