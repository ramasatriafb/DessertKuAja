/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './component/Login'
import Join from './component/Join'
import Awal from './component/Awal'
import Beranda from './component/beranda/Beranda'
import Profil from './component/beranda/Profil'
import Resep from './component/Detail/Resep'

import AwalShinta from './component/AwalShinta'
import BerandaShinta from './component/berandaShinta/BerandaShinta'
import ProfilShinta from './component/berandaShinta/ProfilShinta'
import BoardWalnut from './component/berandaShinta/BoardWalnut'
import PecanPie from './component/berandaShinta/PecanPie'
import DoublePumpkin from './component/berandaShinta/DoublePumpkin'
import BananaCake from './component/berandaShinta/BananaCake'

import CinnamonIce from './component/berandaShinta/CinnamonIce'

import CarrotCake from './component/berandaShinta/CarrotCake'

import Main from './Main'

AppRegistry.registerComponent(appName, () => Main);
