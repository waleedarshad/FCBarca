/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Nav from './widgets/nav';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  LayoutAnimation,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';


var messi = require('../images/messi.png')
var lucho = require('../images/lucho.png')
var neyman = require('../images/neyman.png')
var samuel = require('../images/samuel.png')
var xavi = require('../images/xavi.png')
var andre = require('../images/andre.png')
var gerad = require('../images/gerad.png')
var arda = require('../images/arda.png')
var players = [{
  name:'Leonel Messi',
  games: 23,
  goals: 22,
  assists: 14,
  shots: 65,
  image: messi,
  highlight1: {
    stat: "96%",
    val: "Attacker Used in FCB"
  },
  highlight2: {
    stat: "3rd",
    val: "Attacker in la liga"
  },
  highlight3: {
    stat: "1st",
    val: "Attacker in Eroupe"
  },
  highlight4: {
    stat: "2nd",
    val: "Attacker Used in FCB"
  } 
}, {
  "id": 1,
  "name": "Henry",
  "games": 3,
  "goals": 25,
  "assists": 9,
  "shots": 32,
  image: lucho,
  "highlight1": {
    "stat": "IV",
    "val": "tincidunt lacus at velit vivamus"
  },
  "highlight2": {
    "stat": "II",
    "val": "habitasse platea dictumst morbi"
  },
  "highlight3": {
    "stat": "II",
    "val": "donec diam neque vestibulum"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}, {
  "id": 2,
  "name": "Chris",
  "games": 85,
  "goals": 72,
  "assists": 36,
  "shots": 98,
  image: neyman,
  "highlight1": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  },
  "highlight2": {
    "stat": "Sr",
    "val": "aenean fermentum donec ut mauris"
  },
  "highlight3": {
    "stat": "IV",
    "val": "fusce consequat nulla nisl"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}, {
  "id": 3,
  "name": "Matthew",
  "games": 53,
  "goals": 9,
  "assists": 100,
  "shots": 31,
  image: samuel,
  "highlight1": {
    "stat": "III",
    "val": "ipsum primis in faucibus"
  },
  "highlight2": {
    "stat": "Jr",
    "val": "congue elementum in hac"
  },
  "highlight3": {
    "stat": "IV",
    "val": "libero nam dui proin leo"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}, {
  "id": 4,
  "name": "Victor",
  "games": 100,
  "goals": 68,
  "assists": 60,
  "shots": 66,
  image: xavi,
  "highlight1": {
    "stat": "Jr",
    "val": "potenti cras in purus"
  },
  "highlight2": {
    "stat": "Sr",
    "val": "in quam fringilla rhoncus mauris"
  },
  "highlight3": {
    "stat": "II",
    "val": "in tempus sit amet"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}, {
  "id": 5,
  "name": "Anthony",
  "games": 82,
  "goals": 57,
  "assists": 1,
  "shots": 68,
  image: andre,
  "highlight1": {
    "stat": "Sr",
    "val": "ut mauris eget massa tempor"
  },
  "highlight2": {
    "stat": "Jr",
    "val": "lobortis ligula sit amet"
  },
  "highlight3": {
    "stat": "III",
    "val": "luctus et ultrices posuere cubilia"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}, {
  "id": 6,
  "name": "Johnny",
  "games": 79,
  "goals": 99,
  "assists": 8,
  "shots": 60,
  image: gerad,
  "highlight1": {
    "stat": "Jr",
    "val": "sagittis nam congue risus"
  },
  "highlight2": {
    "stat": "II",
    "val": "in consequat ut nulla"
  },
  "highlight3": {
    "stat": "IV",
    "val": "ac nulla sed vel"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}, {
  "id": 7,
  "name": "Bruce",
  "games": 90,
  "goals": 69,
  "assists": 19,
  "shots": 15,
  image: arda,
  "highlight1": {
    "stat": "IV",
    "val": "amet turpis elementum ligula"
  },
  "highlight2": {
    "stat": "IV",
    "val": "quis augue luctus tincidunt"
  },
  "highlight3": {
    "stat": "Sr",
    "val": "justo etiam pretium iaculis"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}, {
  "id": 8,
  "name": "Timothy",
  "games": 51,
  "goals": 86,
  "assists": 27,
  "shots": 76,
  image: messi,
  "highlight1": {
    "stat": "III",
    "val": "praesent id massa id"
  },
  "highlight2": {
    "stat": "Jr",
    "val": "dapibus augue vel accumsan"
  },
  "highlight3": {
    "stat": "Jr",
    "val": "rhoncus mauris enim leo rhoncus"
  },
  "highlight4": {
    "stat": "Jr",
    "val": "nullam sit amet turpis elementum"
  }
}]

var i = 0

import Swiper from 'react-native-scrollable-tab-view'
import EachArt from './widgets/eachArticle'
import NextGame from './widgets/nextGame'

var {height, width} = Dimensions.get('window');

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentPlayer : players[i],
      displayNav: true
    }
  }
    onPress(){
     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if(this.state.displayNav){
        this.setState({
         displayNav: false
        })}else{
          this.setState({
         displayNav: true
        })
        }
  }
  highlights(x){

  }
  next(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    if(i < 8){
      i = i+1;
      this.setState({
        currentPlayer : players[i]
      })
    }
  }
  prev(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    if(i > 0){
      i = i-1;
      this.setState({
        currentPlayer : players[i]
      })
    }
  }

    navVew(){
    if(this.state.displayNav){
        return(
        <View >
          <View style={styles.menu}>
          <TouchableOpacity onPress={() => this.props.navigator.push({id:'home'})} style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:13}}>HOME</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigator.push({id:'news'})} style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'800', fontSize:13}}>NEWS</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigator.push({id:'players'})} style={{margin:5, marginLeft:50}}><Text style={{color:'#d9991d', fontWeight:'700', fontSize:12}}>PLAYERS</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigator.push({id:'team'})} style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TEAM</Text></TouchableOpacity>
          
          <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TOUR & MUSEUM</Text></TouchableOpacity>
          <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>TICKETS</Text></TouchableOpacity>
          <TouchableOpacity style={{margin:5, marginLeft:50}}><Text style={{color:'#fff', fontWeight:'700', fontSize:12}}>SHOP</Text></TouchableOpacity>
          </View>
          </View>
          
          )}else{
  return(<View />)
}
  }

  render() {
    return (
      <Image source={require('../images/field.png')} resizeMode='stretch' style={styles.container}>
            <Image source ={this.state.currentPlayer.image} resizeMode='stretch' style={styles.container}>
      <Image source={require('../images/overlay2.png')} resizeMode='stretch' style={styles.container}>

      <Nav onPress= {() => this.onPress()} name= {this.state.currentPlayer.name.toUpperCase()} />
            {this.navVew()}
      <View style={{flex:1, justifyContent:'center', marginLeft:60}}>
        <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-20}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>GAMES</Text>
      <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>{this.state.currentPlayer.highlight1.stat}</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> {this.state.currentPlayer.highlight1.val.toUpperCase()}</Text>
      </View>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494577', margin:5, borderWidth:3, backgroundColor:'rgba(0,0,0,0.2)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{this.state.currentPlayer.games}</Text>
      </View>
        </View>
        <View style={{flexDirection:'row',width:300, margin:5}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>GOALS</Text>
      <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>{this.state.currentPlayer.highlight2.stat}</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> {this.state.currentPlayer.highlight2.val.toUpperCase()}</Text>
      </View>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#d9991d', margin:5, borderWidth:3, backgroundColor:'rgba(217,153,29,0.4)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{this.state.currentPlayer.goals}</Text>
      </View>
        </View>
        <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-30}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>ASSIST</Text>
      <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>{this.state.currentPlayer.highlight3.stat}</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> {this.state.currentPlayer.highlight3.val.toUpperCase()}</Text>
      </View>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494675', margin:5, borderWidth:3, backgroundColor:'rgba(73,70,117,0.6)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{this.state.currentPlayer.assists}</Text>
      </View>
        </View>
        <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-20}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>SHOTS</Text>
      <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>{this.state.currentPlayer.highlight4.stat}</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> {this.state.currentPlayer.highlight4.val.toUpperCase()}</Text>
      </View>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494675', margin:5, borderWidth:3, backgroundColor:'rgba(0,0,0,0.3)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{this.state.currentPlayer.shots}</Text>
      </View>
        </View>
        <View style={styles.controls}>
        <TouchableOpacity style={styles.circle}>
        <Icon name = "navigate-before" onPress = {() => this.prev()} size={20} color="#d9991d" />
        </TouchableOpacity>
        <Text style={{fontSize:12, fontWeight:'600', color:'#fff'}}>PLAYER CARD</Text>
        <TouchableOpacity style={styles.circle}>
        <Icon name = "navigate-next" onPress ={() => this.next()} size={20} color="#d9991d"  />
        </TouchableOpacity>
        </View>
      </View>
      </Image>
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
},controls:{
  position:'absolute',
  height:50,
  top:(height/2)-50,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  left:-60,
  width:width,
  backgroundColor:'rgba(0,0,0,0.2)'
},
circle:{
  width:30,
  height:30,
  alignItems:'center',
  justifyContent:'center',
  margin:5,
  borderRadius:15,
  borderWidth:1,
  borderColor:'#d9991d',
  backgroundColor:'rgba(217,153,29,0.2)'
},
news:{
  flex:3
},
menu:{
  height:height-60,
  width:width,
  justifyContent:'center'
}
}
);

