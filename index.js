
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import TocList from './src/componentes/TocList';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => TocList);
