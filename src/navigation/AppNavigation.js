import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as Screens from '../screens';

export default AppNavigation = () => {
  const Stack = createStackNavigator();
  //const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: 'black'
          },
          keyboardHidesTabBar: false,
        }}
      >
        <Stack.Screen
          name='Main'
          component={Screens.MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}