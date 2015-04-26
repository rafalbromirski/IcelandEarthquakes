'use strict';

var React = require('react-native');
var {
  ListView,
} = React;

var LoadingScreen = require('./Loading');
var DetailsScreen = require('./Details');
var ListRow = require('../modules/ListRow');

var REQUEST_URL = "http://apis.is/earthquake/is";

var MainScreen = React.createClass({
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
      <ListRow
        onSelect={() => this.selectRow(earthquake)}
        earthquake={earthquake}
      />
    );
  },

  selectRow: function(earthquake) {
    this.props.navigator.push({
      title: this.getTitle(earthquake.humanReadableLocation),
      component: DetailsScreen,
      passProps: {earthquake},
    });
  },

  getTitle: function(title) {
    var arr = title.split(/\s+/);

    return arr[arr.length - 1];
  }
});

module.exports = MainScreen;
