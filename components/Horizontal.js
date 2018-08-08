/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
      >
        <View style={[styles.outer, styles.fb]}>
          <Text style={styles.innerText}>Facebook</Text>
        </View>
        <View style={[styles.outer, styles.whatsapp]}>
          <Text style={styles.innerText}>Whatsapp</Text>
        </View>
        <View style={[styles.outer, styles.vine]}>
          <Text style={styles.innerText}>Vine</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00bf8f',
  },
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  innerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  },
  fb: {
    backgroundColor: '#3b5998'
  },
  whatsapp: {
    backgroundColor: '#64D448'
  },
  vine: {
    backgroundColor: '#00bf8f'
  },
});
