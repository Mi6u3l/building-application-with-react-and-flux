"use strict"

var React = require('react');

var SelectList = React.createClass({
  createListItems: function(){
    return this.props.items;
  },

  setDefaultItem: function(){
    return this.props.defaultItem;
  },

  render: function() {

    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
 
    return (
      
    <div className={wrapperClass}>
      <label htmlFor={this.props.name}>{this.props.label}</label>
      <div className="field">
        <select
          name={this.props.name}
          className="form-control"
          placeholder={this.props.placeholder}
          ref={this.props.name}
          value={this.setDefaultItem()}
          onChange={this.props.onChange}>
          {this.createListItems()}
          </select>
        <div className="input">{this.props.error}</div>
      </div>
    </div>
    );
  }
})

module.exports = SelectList;