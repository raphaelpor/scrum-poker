/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './App/App.js';

export default function scrumPoker() {
    return (
      <App />
    );
}

AppRegistry.registerComponent('scrumPoker', () => scrumPoker);
