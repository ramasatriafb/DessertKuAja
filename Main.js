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

import AwalShinta from './component/AwalShinta'

import AwalGuruh from './component/AwalGuruh'

import BoardWalnut from './component/berandaShinta/BoardWalnut'
import CarrotCake from './component/berandaShinta/CarrotCake'
import PecanPie from './component/berandaShinta/PecanPie'
import DoublePumpkin from './component/berandaShinta/DoublePumpkin'
import BananaCake from './component/berandaShinta/BananaCake'
import CinnamonIce from './component/berandaShinta/CinnamonIce'
import DeepCake from './component/berandaShinta/DeepCake'

import BestBrownies from './component/berandaGuruh/BestBrownies'
import GermanApple from './component/berandaGuruh/GermanApple'
import Sufgiyanot from './component/berandaGuruh/Sufgiyanot'
import OurBest from './component/berandaGuruh/OurBest'

import Edit from './component/Edit'
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
  },
  AwalShinta: {
    screen: AwalShinta
  },
  BoardWalnut:{
    screen: BoardWalnut
  },
  PecanPie:{
    screen: PecanPie
  },
  CarrotCake:{
    screen: CarrotCake
  },
  DoublePumpkin:{
    screen: DoublePumpkin
  },
  BananaCake:{
    screen: BananaCake
  },
  CinnamonIce:{
    screen: CinnamonIce
  },
  DeepCake:{
    screen: DeepCake
  },
  AwalGuruh: {
    screen: AwalGuruh
  },
  BestBrownies:{
    screen: BestBrownies
  },
  GermanApple:{
    screen: GermanApple
  },
  Sufgiyanot:{
    screen: Sufgiyanot
  },
  OurBest:{
    screen: OurBest
  },
  Edit:{
    screen: Edit
  }

});
const Routing = createAppContainer(Routes);
export default class Main extends React.Component {
  render() {
    return <Routing />;
  }
}
