import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Navigator from './src/navigator/Navigator';

const App = () => {
  return(
    <SafeAreaView>
      <Navigator />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: 'black',
//   },
// });

export default App;
