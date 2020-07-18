import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import Main from './pages/Main/Main';
import NewEntry from './pages/NewEntry/NewEntry';
import Report from './pages/Report/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'order',
    },
  ),
);

export default Routes;
