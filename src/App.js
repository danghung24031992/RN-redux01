/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainView from './components/MainView';
import reducer from './reducers/reducer'

const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainView />
            </Provider>
        );
    }
}