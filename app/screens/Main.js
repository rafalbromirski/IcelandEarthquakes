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
    this._fetchData();
  },

  render: function() {
    if(!this.state.loaded) {
      return this._renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },

  _fetchData: function() {
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

  _renderLoadingView: function() {
    return (
      <LoadingScreen/>
    );
  },

  _renderRow: function(earthquake) {
    return (
      <ListRow
        onSelect={() => this._selectRow(earthquake)}
        earthquake={earthquake}
      />
    );
  },

  _selectRow: function(earthquake) {
    this.props.navigator.push({
      title: this._getTitle(earthquake.humanReadableLocation),
      component: DetailsScreen,
      passProps: {earthquake},
    });
  },

  _getTitle: function(title) {
    var arr = title.split(/\s+/);

    return arr[arr.length - 1];
  }
});

module.exports = MainScreen;
