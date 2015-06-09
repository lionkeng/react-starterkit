// notfound.jsx
var React = require('react');
var Router = require('react-router');
var mui = require('material-ui/lib/index');

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <h1>Page Not Found</h1>
    ); 
  }
});

module.exports = NotFoundPage;