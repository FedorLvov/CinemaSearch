import React from 'react';
import AppNavigation from './navigation/AppNavigation'
import { View, Text, TextInput, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

Text.defaultProps = Text.defaultProps || {}; // настройка параметров по умолчанию для шрифта и инпутов
Text.defaultProps.allowFontScaling = false; // чтобы текст не изменялся в размерах в зависимости от настроек на айфонах

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

Icon.loadFont();

export default function App() {
  return (
    <View style={{flex: 1,}}>
      <StatusBar barStyle={'light-content'} />
      <AppNavigation/>

    </View>
  )
};