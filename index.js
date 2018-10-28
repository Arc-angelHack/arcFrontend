/** @format */
import './src/ReactotronConfig';
import {AppRegistry} from 'react-native';
import AppHOC from './AppHOC';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppHOC);
    