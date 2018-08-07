/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Superman extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Superman coming</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8033',
  },
});
