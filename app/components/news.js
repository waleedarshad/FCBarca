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

var data = [
{
  year: 2009,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
},
{
  year: 2010,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
},{
  year: 2011,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
},{
  year: 2012,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
},
{
  year: 2013,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
},
{
  year: 2014,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
},
{
  year: 2015,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
},
{
  year: 2016,
info: [{
  type:"box1",
  image: image1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:"box2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus."
},
{
  type:'box3',
  text: "ARCHIVE"
},{
  type:'box3',
  text: "ARCHIVE"
}]
}

]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class News extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  navVew(){
    return(
    <View>
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
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>PLAYERS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TEAM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TOUR & MUSEUM</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TICKETS</Text></TouchableOpacity>
      <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>SHOP</Text></TouchableOpacity>
      </View>
      </View>
      
      )
  }

  eachbox(x){

    if(x.type == "box2"){
        return(
          <View style={{alignSelf:'flex-start', justifyContent:'space-between', padding:15, height:120,  width:120, backgroundColor:'#rgba(217,153,29,0.7)'}}>
          <Text numberOfLines={4} style={{color:'#fff', fontWeight:'800', fontSize:12}}>{x.text.toUpperCase()}</Text>
          </View>
          )}
        else if(x.type == "box1"){
          return(
            <View>
            <View style={{ alignSelf:'flex-end', height:170,  width:150, backgroundColor:'#fff'}}>
          <Image source={x.image} resizeMode="stretch" style={{flex:2, height:null, width:null}} />
          <View style={{flex:1, padding:10, justifyContent:'space-between'}}>
          <Text numberOfLines={2} style={{color:'#333', fontWeight:'700', fontSize:11}}>{x.text.toUpperCase()}</Text>
          <Text numberOfLines={1} style={{color:'#555', fontWeight:'500', fontSize:10}}>View more</Text>
          </View>
          </View>
          <View style={{ alignSelf:'flex-end', height:120,  width:100, backgroundColor:'#fff', margin:10, marginRight:40,}}>
          <Image source={x.image} resizeMode="stretch" style={{flex:2, height:null, width:null}} />
          <View style={{flex:1, padding:10, justifyContent:'space-between'}}>
          <Text numberOfLines={2} style={{color:'#333', fontWeight:'700', fontSize:11}}>{x.text.toUpperCase()}</Text>
          <Text numberOfLines={1} style={{color:'#555', fontWeight:'500', fontSize:10}}>View more</Text>
          </View>
          </View>
          </View>
            )
        }else{
          return(<View style={{ alignSelf:'flex-start', marginLeft:50, margin:5, height:90,  width:90, backgroundColor:'rgba(70,64,112,0.5)'}}>
          <View style={{flex:1, padding:10, justifyContent:'space-between'}}>
          <Icon name="donut-large" color='#fff' size={20} />
          <View>
          <Text numberOfLines={2} style={{color:'#fff', fontWeight:'700', fontSize:11}}>{x.text.toUpperCase()}</Text>
          <Text numberOfLines={1} style={{color:'#fff', fontWeight:'500', fontSize:10}}>View more</Text>
          </View>
          </View>
          </View>
                    )
        }
  }
  eachCalendar(x){
    //Most Epic Calendar ever
    return(
      <View style={{height:650, width:width}}>
      <TouchableOpacity><Text style={{marginTop:260, transform:[{rotate:'90deg'}], color:'#d9991d', fontSize:45, fontWeight:'900'}}>{x.year}</Text></TouchableOpacity>
     <ListView
     style = {{flex:1, position:"absolute", top:0, left:10, width:width-20}}
     contentContainerStyle = {{flex:1}}
      dataSource = {ds.cloneWithRows(x.info)}
      renderRow = {(rowData) => this.eachbox(rowData)}/>
      </View>
      )
  }
  calendar(){
    return(
      <ListView
      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.eachCalendar(rowData)}/>
      )
  }
  render() {
    return (
     
      <Image source={require('../images/locker.png')} resizeMode='stretch' style={styles.container}>
      <Image source={require('../images/overlay.png')} resizeMode='stretch' style={styles.container}>
      <Nav name="NEWS"/>
      <View style={{height:height, width:2, backgroundColor:'#d9991d', position:'absolute', left:width/2 }}/>
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

