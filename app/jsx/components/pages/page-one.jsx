// page-one.jsx
var React = require('react');
var Router = require('react-router');
var mui = require('material-ui/lib/index');

var SomePage = React.createClass({
  render: function() {
    return (
      <h1>Page One</h1>
    ); 
  }
});

module.exports = SomePage;