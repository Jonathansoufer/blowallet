import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';

import RootNavigator from './routes';
import './config/ReactotronConfig';

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
