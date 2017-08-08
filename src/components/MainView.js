/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';
class MainView extends Component {
    render() {
        console.log(this.props);
        const { myValue , increment , subNumber } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{myValue}</Text>
                <TouchableOpacity onPress={() => {
                            this.props.dispatch({ type: types.ACTION_INCREASE });
                        }} style={styles.button}>
                    <Text>up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                            this.props.dispatch({ type: types.ACTION_DECREASE });
                        }} style={styles.button}>
                    <Text>down</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});

function mapStateToProps(state) {
    return { myValue: state.value };
}

// function mapDispatchToProps(dispatch){
//     return {
//       increment: dispatch( counterActions.increment() ),
//       decrement:dispatch( counterActions.subNumber() )
//     }
// }

export default connect(mapStateToProps)(MainView);