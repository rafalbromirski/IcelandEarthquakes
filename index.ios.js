'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var App = require('./app/app');

AppRegistry.registerComponent('IcelandEarthquakes', () => App);
