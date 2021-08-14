import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navigation from '../base/Navigation';
import {TabsStack} from './stacks/TabsStack';

import AccountScreen from '../screens/account/AccountScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        {TabsStack}
        <Stack.Screen name="ACCOUNT" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
