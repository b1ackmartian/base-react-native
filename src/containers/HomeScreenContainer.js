import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fonts, homeScreen } from '../styles';

export default class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={homeScreen.container}>
        <Text style={[fonts['Raleway'], homeScreen.text]}>HOME</Text>
      </View>
    );
  }
}