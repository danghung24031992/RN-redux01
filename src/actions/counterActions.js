import * as types from './actionTypes';

export function increment() {
  return {
    type: types.ACTION_INCREASE
  }
}

export function decrement() {
  return {
    type: types.ACTION_DECREASE
  }
}