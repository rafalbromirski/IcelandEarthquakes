'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
} = React;

var moment = require('moment');
var Panel = require('../modules/Panel');
var Map = require('../modules/Map');

var DetailsScreen = React.createClass({
  render: function() {
    return (
      <ScrollView>
        <Map earthquake={this.props.earthquake} />
        <Panel label="Location" text={this.props.earthquake.humanReadableLocation} />
        <Panel label="When" text={this._getRelativeTime()} />
        <Panel label="Depth" text={this.props.earthquake.depth} />
        <Panel label="Size" text={this.props.earthquake.size} />
        <Panel label="Quality" text={this.props.earthquake.quality + "%"} />
      </ScrollView>
    );
  },

  _getRelativeTime: function() {
    return moment(this.props.earthquake.timestamp).startOf('hours').fromNow();
  },
});

module.exports = DetailsScreen;
