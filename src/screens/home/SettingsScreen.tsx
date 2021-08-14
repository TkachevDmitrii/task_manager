import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import List from '../../components/list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export const SettingsScreen = () => {
 
  return (
    <List />
  );
};