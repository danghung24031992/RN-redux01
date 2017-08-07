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

const initState = { value: 0 };

const reducer = (state = initState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
}

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