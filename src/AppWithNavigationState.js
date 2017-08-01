import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { Font } from 'expo';

import NavigationContainer from './containers/NavigationContainer';

export class AppWithNavigationState extends Component {
  state = {
    fontLoaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    // Load Custom Fonts with Expo Font API
    await Font.loadAsync({
      'Raleway': require('../assets/fonts/Raleway/Raleway-Regular.ttf'),
      'Raleway-LightItalic': require('../assets/fonts/Raleway/Raleway-LightItalic.ttf'),
      'Raleway-Light': require('../assets/fonts/Raleway/Raleway-Light.ttf'),
      'Raleway-Medium': require('../assets/fonts/Raleway/Raleway-Medium.ttf'),
      'Oswald': require('../assets/fonts/Oswald/Oswald-Regular.ttf'),
      'Oswald-ExtraLight': require('../assets/fonts/Oswald/Oswald-ExtraLight.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { dispatch, navigation } = this.props;
    const { fontLoaded } = this.state;

    return (!fontLoaded ? (
      <ActivityIndicator color='#ffffff' />
    ) : (
      <NavigationContainer navigation={addNavigationHelpers({ dispatch, state: navigation })} />
    ));
  }
}

export const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(mapStateToProps)(AppWithNavigationState);