import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Navigation from '../../base/Navigation';
import { SetingsList } from './components/settingsList';

const List = () => {

  const listScreens = [
    {key: 'ACCOUNT'},
    {key: 'HOME'},
    {key: 'CALENDAR'},
  ];

  return(
    <View style={styles.container}>
      <FlatList
        data={SetingsList}
        extraData={listScreens}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => Navigation.navigate('SETTINGS')}>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )} 
      />
    </View>
  );
};

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

export default List;