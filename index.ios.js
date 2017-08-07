/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = { value: 0 };

const reducer = (state = initState, action)=>{
  if (action.type === 'UP') return { value: state.value + 1 };
  if (action.type === 'DOWN') return { value: state.value - 1 };
  return state;
}

const store = createStore(reducer);

export default class DemoRedux02 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DemoRedux02', () => DemoRedux02);
