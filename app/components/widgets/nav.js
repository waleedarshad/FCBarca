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

export default class Nav extends Component {
  render() {
    return (
      <View style={{height:50, backgroundColor:'rgba(0,0,0,0.1)', alignItems:'center', flexDirection:'row'}}>
      <TouchableOpacity style={styles.row}>
      <Icon name = "more-vert" size={20} style={{margin:5, fontWeight:"600"}} color="#fff" />
      </TouchableOpacity>
      <Text style={{color:'#fff', fontSize:12, fontWeight:'800'}}>
      FC BARCELONA  |   {this.props.name}
      </Text>
      </View>
    );
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

