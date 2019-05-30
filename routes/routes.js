import { createSwitchNavigator } from 'react-navigation';

import {
  LoginScreen,
  LoginLoadingScreen,
  UserRoute
} from '../features';

const rootRoutes = createSwitchNavigator(
  {
    LoginLoading: LoginLoadingScreen,
    Login: LoginScreen,
    App: UserRoute
  },
  {
    initialRouteName: 'LoginLoading',
  }
);

export {
  rootRoutes
}