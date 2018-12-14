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
import Main from './Main'

AppRegistry.registerComponent(appName, () => Main);
