import React, { Component } from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import { CustomButton, Header } from '../../components'
import { StatisticCard } from './components'
import {Color, Constants, GlobalStyles, Icons} from '../../constants/UIElemetns'
import Styles from './Styles'

class MainScreen extends Component {

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {};

    navigation.setOptions({ headerShown: false })

  }

  render() {

    const { } = this.state;

    console.log('MainScreen Render', {state: this.state});
    return (
      <View style={GlobalStyles.globalContainerStyle}>
        <SafeAreaView style={GlobalStyles.globalSafeAreaViewStyle}>
          <ScrollView contentContainerStyle={GlobalStyles.globalContentContainerStyle}>
            <View
              style={{
                padding: 20,
                backgroundColor: Color.blue,
                flexDirection: 'row',
                alignItems: 'center',

                shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity:  1,
                shadowRadius: 3,
                elevation: 5,
              }}
            >
              <TextInput
                style={{
                  height: 40,
                  width: '100%',
                  backgroundColor: Color.white,
                  borderRadius: 20,
                  // borderTopLeftRadius: 20,
                  // borderBottomLeftRadius: 20,
                  paddingLeft: 15,
                  paddingRight: 40,
                  // borderColor: 'gray',
                  // borderWidth: 1
                }}
                // onChangeText={text => onChangeText(text)}
                // value={value}
              />

              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40/2,
                  backgroundColor: Color.black,
                  marginLeft: -40,
                  justifyContent: 'center',
                  alignItems: 'center',

                }}
                activeOpacity={Constants.activeOpacity}
              >
                <Icon name="search" size={25} color={Color.white} />
              </TouchableOpacity>


            </View>

          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

}

export default MainScreen
