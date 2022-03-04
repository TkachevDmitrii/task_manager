import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {createStore, createEvent} from 'effector';
import {useStore} from 'effector-react';
import styled from 'styled-components/native';
import {IconHome} from '../../assets/icons/tabs/IconHome';

const addNumber = createEvent() //указать типы в event нужно
const $storeNumber = createStore(0).on(addNumber, (state, num) =>  state + Number(num))

const Row = styled.View`
  flex-direction: row;
  margin-left: 20;
`

const StyledText = styled.Text`
  font-size: 20
  margin-right: 20;
`

const HomeScreen = () => {
  const navigation = useNavigation();
  const number = useStore($storeNumber)

  return (
    <View>
      <Text>HomeScreen</Text>
      <IconHome sizeX={133} sizeY={133} color={'red'} />
      <Button title="Button" onPress={() => navigation.navigate('ACCOUNT')}>
        "push"
      </Button>

      <Row>
        <TouchableOpacity onPress={() => addNumber(1)}>
          <StyledText>+</StyledText>
        </TouchableOpacity>
        <StyledText>{number}</StyledText>
        <TouchableOpacity onPress={() => addNumber(-1)}>
          <StyledText>-</StyledText>
        </TouchableOpacity>
      </Row>
    </View>
  );
};

export default HomeScreen;
