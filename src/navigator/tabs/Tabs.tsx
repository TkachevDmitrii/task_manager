import React from 'react';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../consts/screens';
import Navigation from '../../base/Navigation';
import HomeScreen from '../../screens/home/HomeScreen';
import {CalendarScreen} from '../../screens/home/CalendarScreen';
import {SettingsScreen} from '../../screens/home/SettingsScreen';

import {IconHome} from '../../assets/icons/tabs/IconHome';
import {IconSettings} from '../../assets/icons/tabs/IconSettings';
import {IconCalendar} from '../../assets/icons/tabs/IconCalendar';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

// const getTabBarVisible = (route: any) => {
//   const routeName = getFocusedRouteNameFromRoute(route);

//   if (!routeName) {
//     return true;
//   }

//   return hideOnScreens.indexOf(routeName) === -1;
// };

enum TypeIcon {
  Home = 'home',
  Calendar = 'calendar',
  Settings = 'settings',
}

export const Tabs = () => {
  const { HOME, CALENDAR, SETTINGS } = screens

  const handleOptions = (labelName: string, type: TypeIcon) => {

    return {
      tabBarLabel: labelName,
      tabBarIcon: (props:{focused: boolean}) => (
        type === TypeIcon.Home && <IconHome color={props.focused ? 'red' : 'gray'} /> ||
        type === TypeIcon.Calendar && <IconCalendar color={props.focused ? 'red' : 'gray'} /> ||
        type === TypeIcon.Settings && <IconSettings color={props.focused ? 'red' : 'gray'} />
      )
    }
  }

  return (
    <Tab.Navigator initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={handleOptions('Главная', TypeIcon.Home)}
      />

      <Tab.Screen
        name={CALENDAR}
        component={CalendarScreen}
        options={handleOptions('Календарь', TypeIcon.Calendar)}
      />

      <Tab.Screen
        name={SETTINGS}
        component={SettingsScreen}
        options={handleOptions('Настройки', TypeIcon.Settings)}
      />
    </Tab.Navigator>
  );
};
