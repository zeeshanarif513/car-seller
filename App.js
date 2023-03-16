import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import MainNavigator from './app/navigator';
import { store, persistor } from './app/redux/store/MainStore';
const Provider = require('react-redux').Provider;

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1}}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaView>
  );
};


export default App;
