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
  ListView,
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
var image1 = require('../images/image1.jpg');

var data = {
  goals: 40,
  games: 32,
  distance: 341,
  passes: 628
}

var messi = require('../images/messi.png')
var lucho = require('../images/lucho.png')
var neyman = require('../images/neyman.png')
var samuel = require('../images/samuel.png')
var xavi = require('../images/xavi.png')
var andre = require('../images/andre.png')
var gerad = require('../images/gerad.png')
var arda = require('../images/arda.png')

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class News extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  overlay(){
    return(
      <View style={{backgroundColor:'rgba(0,0,0,0.3)', height:380, width:width, top:100, left:0, position:'absolute'}}>
      <ScrollView style={{flex:1}} horizontal = {true}>
      <View style={{backgroundColor:'rgba(255,255,255,0.16)', transform: [{skewX: '-8deg'}], height:380, marginRight:5, width:180}}>
      <Image source={messi} resizeMode='contain' style={{flex:1, height:null, width:null}}/>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.26)', transform: [{skewX: '-8deg'}], height:380, marginRight:5, width:180}}>
      <Image source={neyman} resizeMode='contain' style={{flex:1, height:null, width:null}}/>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.36)', transform: [{skewX: '-8deg'}], height:380, marginRight:5, width:180}}>
      <Image source={gerad} resizeMode='contain' style={{flex:1, height:null, width:null}}/>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.26)', transform: [{skewX: '-8deg'}], height:380, marginRight:5, width:180}}>
      <Image source={arda} resizeMode='contain' style={{flex:1, height:null, width:null}}/>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.16)', transform: [{skewX: '-8deg'}], height:380, marginRight:5, width:180}}>
      <Image source={xavi} resizeMode='contain' style={{flex:1, height:null, width:null}}/>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.26)', transform: [{skewX: '-8deg'}], height:380, marginRight:5, width:180}}>
      <Image source={samuel} resizeMode='contain' style={{flex:1, height:null, width:null}}/>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.36)', transform: [{skewX: '-8deg'}], height:380, marginRight:5, width:180}}>
      <Image source={lucho} resizeMode='contain' style={{flex:1, height:null, width:null}}/>
      </View>
      </ScrollView>
      </View>
      )
  }

  navVew(){
    return(
    <View>
      <View style={styles.menu}>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:13}}>HOME</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'800', fontSize:13}}>NEWS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>PLAYERS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#d9991d', fontWeight:'700', fontSize:12}}>TEAM</Text></TouchableOpacity>
      <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d3d3d3' />
        <Text style={{color:'#d3d3d3', fontWeight:'700', fontSize:11}}>FEED</Text></TouchableOpacity>
        <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d9991d' />
        <Text style={{color:'#d9991d', fontWeight:'700', fontSize:11}}>STATISTICS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d3d3d3' />
        <Text style={{color:'#d3d3d3', fontWeight:'700', fontSize:11}}>ABOUT</Text></TouchableOpacity>
        <TouchableOpacity style={styles.subMenu}>
        <Icon name="chevron-right" size={17} color='#d3d3d3' />
        <Text style={{color:'#d3d3d3', fontWeight:'700', fontSize:11}}>GALLERY</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TOUR & MUSEUM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TICKETS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>SHOP</Text></TouchableOpacity>
      </View>
      </View>
      
      )
  }

 
  render() {
    return (
     
      <Image source={require('../images/locker.png')} resizeMode='stretch' style={styles.container}>
      <Image source={require('../images/overlay.png')} resizeMode='stretch' style={styles.container}>
      <Nav name="TEAM"/>
      <View style={{flex:1}}>
      <View style={{flex:3}}>
      <View style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
      <Text style={{color:'#d9991d', fontWeight:'800', marginLeft:60, fontSize:80}}>{data.goals}</Text>
      <Text style={{color:'#d9991d', fontWeight:'800', fontSize:16, marginTop:20}}>GOALS</Text>
      </View>
      <View style={{flex:2, alignItems:'center'}}>
      <Text style={{color:'#fff', fontSize:16, fontWeight:'500'}}>GOALS SCORED THIS SEASON</Text>
      </View>
      </View>
      <View style={{flex:3}}>

      </View>

      <View style={{flex:2, alignItems:'center', justifyContent:'space-around', flexDirection:'row'}}>
        <View style={styles.block}>
        <Text style={styles.subTitle}>GAMES</Text>
        <View style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Text style={styles.mainVal}>{data.games}</Text>
        <Text style={styles.mainVal2}>MA</Text>
        </View>
        <Text style={styles.littleLine}>15% INCREASE</Text>
        <Text style={styles.littleLine}>32 AVG SEASON</Text>
        </View>
        <View style={styles.block}>
        <Text style={styles.subTitle}>DISTANCE</Text>
        <View style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Text style={styles.mainVal}>{data.distance}</Text>
        <Text style={styles.mainVal2}>KM</Text>
        </View>
        <Text style={styles.littleLine}>15% INCREASE</Text>
        <Text style={styles.littleLine}>32 AVG SEASON</Text>
        </View>
        <View style={styles.block}>
        <Text style={styles.subTitle}>PASSES</Text>
        <View style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Text style={styles.mainVal}>{data.passes}</Text>
        <Text style={styles.mainVal2}>A</Text>
        </View>
        <Text style={styles.littleLine}>15% INCREASE</Text>
        <Text style={styles.littleLine}>32 AVG SEASON</Text>
        </View>
      </View>
       {this.overlay()}
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
block:{
  flex:1,
  margin:5,
  marginTop:10,
  borderColor:'#777',
  borderLeftWidth:1,
  padding:10
},
subTitle:{
  color:"#c6832a",
  fontWeight:'600',
  fontSize:15

},
mainVal:{
  color:'#fbfaff',
  fontSize:30,
  fontWeight:'900',

},mainVal2:{
  color:'#fbfaff',
  fontSize:22,
  fontWeight:'900',

},littleLine:{
  color:'#7c7a85',
  fontWeight:'500',
  fontSize:11
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

