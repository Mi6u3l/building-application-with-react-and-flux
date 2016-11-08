'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page not found</h1>
        <p>Nothing to see here</p>
        <p><Link to="app">Back to home page</Link></p>
      </div>
      );
  }
});

module.exports = NotFoundPage;