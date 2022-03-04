import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import Navigator from './src/navigator/Navigator';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`

const App = () => {
  return (
    // <SafeArea
    <StyledSafeAreaView>
      <Navigator />
    </StyledSafeAreaView>
  );
};

export default App;
