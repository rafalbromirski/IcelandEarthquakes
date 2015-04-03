'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  MapView,
} = React;

var moment = require('moment');
var Panel = require('./Panel');

var EarthquakeScreen = React.createClass({
  getRegion: function() {
    return {
      latitude: this.props.earthquake.latitude,
      longitude: this.props.earthquake.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }
  },

  getRelativeTime: function() {
    return moment(this.props.earthquake.timestamp).startOf('hours').fromNow();
  },

  render: function() {
    return (
      <ScrollView>
        <MapView region={this.getRegion()} style={styles.map} />
        <Panel label="Location" text={this.props.earthquake.humanReadableLocation} />
        <Panel label="When" text={this.getRelativeTime()} />
        <Panel label="Depth" text={this.props.earthquake.depth} />
        <Panel label="Size" text={this.props.earthquake.size} />
        <Panel label="Quality" text={this.props.earthquake.quality + "%"} />
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  map: {
    height: 250,
  },
});

module.exports = EarthquakeScreen;
