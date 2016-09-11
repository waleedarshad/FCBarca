/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Nav from './widgets/nav';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Ideally this would be a parallax view
import Parallax from 'react-native-parallax-view'

import {
  AppRegistry,
  StyleSheet,
  ScrollView,
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

var data = [
{
  type:"box1"
  image: image1,
  text: ""
}
]

export default class News extends Component {
  navVew(){
    return(
    <View>
      <Nav name='NEWS' />
      <View style={styles.menu}>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:13}}>HOME</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#d9991d', fontWeight:'800', fontSize:13}}>NEWS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d3d3d3' />
        <Text style={{color:'#d3d3d3', fontWeight:'700', fontSize:11}}>RESULTS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d9991d' />
        <Text style={{color:'#d9991d', fontWeight:'700', fontSize:11}}>CALENDAR</Text></TouchableOpacity>
        <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d3d3d3' />
        <Text style={{color:'#d3d3d3', fontWeight:'700', fontSize:11}}>TABLES</Text></TouchableOpacity>
        <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d3d3d3' />
        <Text style={{color:'#d3d3d3', fontWeight:'700', fontSize:11}}>FORMATIONS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>FOOTBALL</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TEAM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TOUR & MUSEUM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TICKETS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>SHOP</Text></TouchableOpacity>
      </View>
      </View>
      
      )
  }
  eachCalendar(){
    //Most Epic Calendar ever
    return()
  }
  calendar(){
    return(
      <ListView
      dataSource = {this.state.dataSource}
      horizontal = {true}
      renderRow = {(rowData) => this.eachCalendar(rowData)}
      />
      )
  }
  render() {
    return (
     
      <Image source={require('../images/locker.png')} resizeMode='stretch' style={styles.container}>
      <Image source={require('../images/overlay.png')} resizeMode='stretch' style={styles.container}>
      {this.calendar()}
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
subMenu:{
  width:150,
  flexDirection:'row',
  padding:5,
  backgroundColor:'rgba(255,255,255,0.15)',
  alignItems:'center',
  justifyContent:'space-around',
  marginLeft:50,
  transform: [{skewX: '-25deg'}],
},
menu:{
  flex:5,
  justifyContent:'center'
}
}
);

