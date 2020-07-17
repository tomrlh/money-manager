/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './src/pages/Main';
import {name as appName} from './app.json';
import NewEntry from './src/pages/NewEntry';

AppRegistry.registerComponent(appName, () => NewEntry);
