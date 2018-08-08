import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Horizontal from './components/Horizontal';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Boiler Plate</Text>
        <Horizontal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33ff62',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
