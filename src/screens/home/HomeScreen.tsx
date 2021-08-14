import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {IconHome} from '../../assets/icons/tabs/IconHome';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <IconHome sizeX={133} sizeY={133} color={'red'} />
      <Button title="Button" onPress={() => navigation.navigate('ACCOUNT')}>
        "push"
      </Button>
    </View>
  );
};

export default HomeScreen;
