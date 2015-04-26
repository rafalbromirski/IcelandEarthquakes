'use strict';

var React = require('react-native');
var {
  StyleSheet,
  NavigatorIOS,
} = React;

var MainScreen = require('./screens/Main');

var App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
	style={styles.app}
	initialRoute={{
	  title: 'Earthquakes in Iceland',
	  component: MainScreen,
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

module.exports = App;
