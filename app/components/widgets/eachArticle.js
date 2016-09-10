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
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class EachArt extends Component {
  render() {
  return(<View style={{flex:1}}>
      <Text style={{marginLeft:20, width:200, fontSize:38, lineHeight:38,  fontWeight:'900', color:'#d9991d',}}>
      PRESS STUNNED
      </Text>
       <Text style={{marginLeft:20, fontSize:38, lineHeight:38, fontWeight:'900', color:'#fff',}}>
      BY BARCA
      </Text>
      <Text style={{marginLeft:20, fontSize:12, color:'#fff',}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper hendrerit augue, et vestibulum leo consectetur vitae. Duis a lorem ac quam scelerisque malesuada. Praesent vitae elit sit amet sapien venenatis egestas.
      </Text>
      </View>)
  }
}

