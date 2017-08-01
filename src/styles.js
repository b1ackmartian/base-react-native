import { StyleSheet } from 'react-native';

const fonts = StyleSheet.create({
  'Raleway': {
    fontFamily: 'Raleway',
  },
  'Raleway-LightItalic': {
    fontFamily: 'Raleway-LightItalic',
  },
  'Raleway-Light': {
    fontFamily: 'Raleway-Light',
  },
  'Raleway-Medium': {
    fontFamily: 'Raleway-Medium',
  },
  'Oswald': {
    fontFamily: 'Oswald',
  },
  'Oswald-ExtraLight': {
    fontFamily: 'Oswald-ExtraLight',
  },
});

const homeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18
  }
});

export { fonts, homeScreen };