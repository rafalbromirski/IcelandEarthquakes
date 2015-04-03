'use strict';

var React = require('react-native');
var {
  ListView,
} = React;

var LoadingScreen = require('./LoadingScreen');
var EarthquakeScreen = require('./EarthquakeScreen');
var EarthquakeRow = require('./EarthquakeRow');

var REQUEST_URL = "http://apis.is/earthquake/is";

var EarthquakesScreen = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.results),
          loaded: true,
        });
      })
      .done();
  },

  render: function() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <LoadingScreen/>
    );
  },

  renderRow: function(earthquake) {
    return (
      <EarthquakeRow
        onSelect={() => this.selectRow(earthquake)}
        earthquake={earthquake}
      />
    );
  },

  selectRow: function(earthquake) {
    this.props.navigator.push({
      title: this.getTitle(earthquake.humanReadableLocation),
      component: EarthquakeScreen,
      passProps: {earthquake},
    });
  },

  getTitle: function(title) {
    var arr = title.split(/\s+/);

    return arr[arr.length - 1];
  }
});

module.exports = EarthquakesScreen;
