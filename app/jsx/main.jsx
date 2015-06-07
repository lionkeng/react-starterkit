// main.jsx
var React = require('react/addons');
var injectTapEventPlugin = require('react-tap-event-plugin');
var App = require('./components/app.jsx');

// relative to app/jsx
require('../css/styles.css');


//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the document body. 
React.render(<App/>, document.body);
