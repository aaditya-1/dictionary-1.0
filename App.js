import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements'
import HomeScreen from './components/HomeScreen'

export default class App extends Component {

  render(){

    return (
      <View style={{backgroundColor:"#675d30",height:"100%"}}>
        <HomeScreen />
      </View>
    );


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
