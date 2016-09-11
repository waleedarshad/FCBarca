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

import Swiper from 'react-native-scrollable-tab-view'
import EachArt from './widgets/eachArticle'
import NextGame from './widgets/nextGame'

var {height, width} = Dimensions.get('window');

export default class Home extends Component {
  eachArticle(){
  }

  render() {
    return (
      <Image source={require('../images/barca.png')} resizeMode='stretch' style={styles.container}>
      <Image source={require('../images/overlay.png')} resizeMode='stretch' style={styles.container}>
      <Nav name='HOME' />
      <View style={styles.menu}>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#d9991d', fontWeight:'700', fontSize:13}}>HOME</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:13}}>NEWS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>FOOTBALL</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TEAM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TOUR & MUSEUM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TICKETS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>SHOP</Text></TouchableOpacity>
      </View>
      <View style={styles.news}>
      <Swiper style={{margin:10}} tabBarPosition="bottom" tabBarUnderlineStyle={{backgroundColor:"#d9991d"}}>
      <EachArt tabLabel="" />
      <NextGame tabLabel="  " />
      <EachArt tabLabel="   " />
      </Swiper>
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
  flex:3
},
menu:{
  flex:4,
  justifyContent:'center'
}
}
);

