'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} = React;

var moment = require('moment');

var EarthquakeRow = React.createClass({
  underlayColor: function() {
    return '#f2f2f2';
  },

  getRelativeTime: function() {
    return moment(this.props.earthquake.timestamp).startOf('hours').fromNow();
  },

  render: function() {
    return (
      <TouchableHighlight underlayColor={this.underlayColor()} onPress={this.props.onSelect}>
        <View style={styles.row}>
          <View style={styles.row__body}>
            <Text style={styles.row__title}>{this.getTitle()}</Text>
            <Text style={styles.row__timestamp}>
              {this.getRelativeTime()}
            </Text>
          </View>
          <Text style={styles.row__size}>
            {this.props.earthquake.size}
          </Text>
        </View>
      </TouchableHighlight>
    );
  },

  getTitle: function() {
    var arr = this.props.earthquake.humanReadableLocation.split(/\s+/)

    return arr[arr.length - 1]
  }
})

var styles = StyleSheet.create({
  row: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 20,
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row__size: {
    fontSize: 22,
    fontWeight: "200",
    width: 50,
    textAlign: "right",
  },
  row__body: {
    flex: 1,
  },
  row__title: {
    fontSize: 14,
  },
  row__timestamp: {
    fontWeight: "300",
    color: '#777777',
  },
});

module.exports = EarthquakeRow;
