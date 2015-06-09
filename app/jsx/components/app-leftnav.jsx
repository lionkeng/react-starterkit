//app-leftnav.jsx
var React = require('react');
var Router = require('react-router');
var mui = require('material-ui/lib/index');
var {MenuItem, LeftNav} = mui;
var {Colors, Spacing, Typography} = mui.Styles;

var menuItems = [
    { route: 'home', text: 'Home' },
    { route: 'page-one', text: 'Page One' },
    { route: 'page-two', text: 'Page Two' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
    { type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
    { type: MenuItem.Types.LINK, payload: 'http://facebook.github.io/react', text: 'React' },
    { type: MenuItem.Types.LINK, payload: 'https://www.google.com/design/spec/material-design/introduction.html', text: 'Material Design' }
  ];

var AppLeftNav = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getStyles: function() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px'
    };
  },

  getSelectedIndex: function() {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  },

  onLeftNavChange: function(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  },

  onHeaderClick: function() {
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  },

  render: function() {
    var header = (
      <div style={this.getStyles()} onClick={this.onHeaderClick}>
        toggled canvas menu
      </div>
    );

    return (
      <LeftNav 
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this.getSelectedIndex()}
        onChange={this.onLeftNavChange} />
    );
  },

  toggle: function() {
    this.refs.leftNav.toggle();
  },
});

module.exports = AppLeftNav;


// ES6 implementation
/*
class AppLeftNav extends React.Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.getSelectedIndex = this.getSelectedIndex.bind(this);
    this.onLeftNavChange = this.onLeftNavChange.bind(this);
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }

  getStyles() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px'
    };
  }

  render() {
    var header = (
      <div style={this.getStyles()} onClick={this.onHeaderClick}>
        toggled canvas menu
      </div>
    );

    return (
      <LeftNav 
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this.getSelectedIndex()}
        onChange={this.onLeftNavChange} />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  getSelectedIndex() {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  onLeftNavChange(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  onHeaderClick() {
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func
};

module.exports = AppLeftNav;
*/
