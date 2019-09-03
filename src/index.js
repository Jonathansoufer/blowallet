import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './routes';
import './config/ReactotronConfig';

import store from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#fcfdfe" />
        <RootNavigator />
      </Provider>
    </>
  );
};

export default App;
