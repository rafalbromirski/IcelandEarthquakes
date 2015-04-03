/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var EarthquakesScreen = require('./EarthquakesScreen');

var App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
	style={styles.app}
	initialRoute={{
	  title: 'Earthquakes in Iceland',
	  component: EarthquakesScreen,
	}}
      />
    );
  }
});

var styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

AppRegistry.registerComponent('IcelandEarthquakes', () => App);
