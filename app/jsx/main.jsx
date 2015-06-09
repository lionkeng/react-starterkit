(function() {
  // main.jsx
  var React = require('react/addons');
  var Router = require('react-router');
  var injectTapEventPlugin = require('react-tap-event-plugin');

  var AppRoutes = require('./app-routes.jsx');


  // relative to app/jsx
  require('../css/styles.css');


  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  Router
  // Runs the router, similiar to the Router.run method. You can think of it as an 
  // initializer/constructor method.
  .create({
    routes: AppRoutes,
    scrollBehavior: Router.ScrollToTopBehavior
  })
  // This is our callback function, whenever the url changes it will be called again. 
  // Handler: The ReactComponent class that will be rendered  
  .run(function (Handler, state) {
      // passing down a prop to App, the RouteHandler
      React.render(<Handler url="getclient.php" />, document.body);
  });


})();
