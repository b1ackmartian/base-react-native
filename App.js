import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from './src/store';

import AppWithNavigationState from './src/AppWithNavigationState';

export default () => (
  <Provider store={createStore()}>
    <AppWithNavigationState />
  </Provider>
)