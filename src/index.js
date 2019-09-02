import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './redux/store';

import RootNavigator from './routes';
import './config/ReactotronConfig';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <StatusBar backgroundColor="#fcfdfe" />
        <RootNavigator />
      </Provider>
    </>
  );
};

export default App;
