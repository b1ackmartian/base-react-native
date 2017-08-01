import { StackNavigator } from 'react-navigation';
import HomeScreenContainer from './HomeScreenContainer';

export default StackNavigator(
  {
    Home: { screen: HomeScreenContainer },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal',
  },
);