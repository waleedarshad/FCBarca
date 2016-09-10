/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class NextGame extends Component {
  render() {
  return(<View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Image source={require('../../images/nextgame.png')} resizeMode="contain" style={{width:200, height:100}} />
      <Image source={require('../../images/valencia.png')} resizeMode="contain" style={{width:130, height:80}} />
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, row:{
    flexDirection:'row',
    alignItems:'center',
    margin:7,
  }
});

