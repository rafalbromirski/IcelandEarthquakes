'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var LoadingScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.loading}>
        <Text>
          Loading Data...
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = LoadingScreen;
