/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './src/pages/Main';
import {name as appName} from './app.json';
import NewEntry from './src/pages/NewEntry';
import Report from './src/pages/Report';

AppRegistry.registerComponent(appName, () => Report);
