// app-routes.jsx
// app-routes.jsx
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Root = Router.Root;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./components/app.jsx');
var Home = require('./components/pages/home.jsx');
var NotFound = require('./components/pages/notfound.jsx');


var Community = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  remove: function () {
    this.props.onRemoveCommunity(this.context.router.getCurrentParams().name);
  },

  render: function () {
    return (
      <div className="Community">
        <h1>{this.context.router.getCurrentParams().name}</h1>
        <button onClick={this.remove}>remove</button>
      </div>
    );
  }
});

/**
 * the view hierarchy for the app
 */
var AppRoutes = (
  <Route handler={Root}>
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        <Route name="main" path="index.html" handler={Home} />
        <Route name="home" path="home.html" handler={Home} />
        <Route name="community" path="community/:name" handler={Community} />
    </Route>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

module.exports = AppRoutes;