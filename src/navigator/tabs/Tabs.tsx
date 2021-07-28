import React from 'react';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../consts/screens';
import Navigation from '../../base/Navigation';
import {HomeScreen} from '../../screens/home/HomeScreen';
import {SettingsScreen} from '../../screens/settings/SettingsScreen';
// import {IconHome} from '../../assets/icons/tabs/IconHome';
// import {IconSettings} from "../../assets/icons/tabs/IconSettings";

const Tab = createBottomTabNavigator();

// const getTabBarVisible = (route: any) => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//
//   if (!routeName) {
//     return true;
//   }
//
//   return hideOnScreens.indexOf(routeName) === -1;
// };

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={({route}: any) => ({
          tabBarLabel: 'Главная',
          // tabBarIcon: ({focused}) => (
          //   <IconHome color={focused ? 'red' : 'gray'} />
          // ),
        })}
      />

      <Tab.Screen
        name={screens.SETTINGS}
        component={SettingsScreen}
        options={({route}: any) => ({
          tabBarLabel: 'Настройки',
          // tabBarIcon: ({focused}) => (
          //   <IconBasket color={focused ? 'red' : 'gray'} />
          // ),
        })}
      />
    </Tab.Navigator>
  );
};