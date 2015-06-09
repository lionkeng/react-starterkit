// test.jsx
/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var mui = require('material-ui/lib/index');
var { AppBar, AppCanvas, Menu, FlatButton, RaisedButton, Styles } = mui;

var ThemeManager = Styles.ThemeManager();
var Colors = Styles.Colors;

var App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  handleTouchTap: function() {
    alert('1-2-3-4-5');
  },

  render: function() {
    var self = this;
    var title = "Hello World!";

    var containerStyle = {
      textAlign: 'center',
      paddingTop: '200px'
    };

    return (
      <div predefinedLayout={1}>

        <AppBar
          onLeftIconButtonTouchTap={self.handleTouchTap}
          title={title}
          zDepth={0}
        />
        <RouteHandler />
      </div>
    );
  },
  
});

module.exports = App;

