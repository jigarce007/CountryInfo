/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ToDoApp from './ToDoApp';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ToDoApp);
