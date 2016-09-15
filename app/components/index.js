import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Home from './home'
import News from './news'
import Team from './team'
import Players from './players'


export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'news') {
      return (
        <News
        {...this.props} 
        navigator={navigator} />
        );
    }if (routeId === 'players') {
      return (
        <Players
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'team') {
      return (
        <Team
        {...this.props} 
        navigator={navigator} />
        );
    }        
   }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'team', name: 'team'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
