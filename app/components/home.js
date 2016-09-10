/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Nav from './widgets/nav';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Home extends Component {
  render() {
    return (
      <Image source={require('../images/barca.png')} resizeMode='stretch' style={styles.container}>
      <Image source={require('../images/overlay.png')} resizeMode='stretch' style={styles.container}>
      <Nav name='HOME' />
      <View style={styles.menu}>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#d9991d', fontWeight:'700', fontSize:13}}>HOME</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>FOOTBALL</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TEAM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TOUR & MUSEUM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TICKETS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>SHOP</Text></TouchableOpacity>
      </View>
      <View style={styles.news}>
      <View style={{flex:1}}>
      <Text style={{marginLeft:30, width:200, fontSize:38, lineHeight:38,  fontWeight:'900', color:'#d9991d',}}>
      PRESS STUNNED
      </Text>
       <Text style={{marginLeft:30, fontSize:38, lineHeight:38, fontWeight:'900', color:'#fff',}}>
      BY BARCA
      </Text>
      <Text style={{marginLeft:30, fontSize:12, color:'#fff',}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper hendrerit augue, et vestibulum leo consectetur vitae. Duis a lorem ac quam scelerisque malesuada. Praesent vitae elit sit amet sapien venenatis egestas.
      </Text>
      </View>
      </View>
      </Image>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null
},
news:{
  flex:1
},
menu:{
  flex:1
}
}
);

