import React from 'react';
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import Splash from './component/Splash';
import Login from './component/Login'
import Join from './component/Join'
import Awal from './component/Awal'
import Resep from './component/Detail/Resep'
import Resep1 from './component/beranda/Resep1'
const Routes = createStackNavigator({
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
  Join: {
      screen: Join
  },
  Awal: {
      screen: Awal
  },
  Resep: {
      screen: Resep
  },
  Resep1: {
      screen: Resep1
  }
});
const Routing = createAppContainer(Routes);
export default class Main extends React.Component {
  render() {
    return <Routing />;
  }
}
