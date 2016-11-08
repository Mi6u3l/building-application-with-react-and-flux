"use strict"

var React = require('react');
var Input = require("../common/textInput");
var SelectList = require("../common/selectList");
var AuthorStore = require('../../stores/authorStore');

var CourseForm = React.createClass({
  getItems: function() {
      var options = [];
      AuthorStore.getAllAuthors().forEach(function(item){
      options.push(<option value={item.id}>{item.firstName} {item.lastName}</option>);
    });
      try{
     // alert(this.props.course.title);
     // alert(this.props.course.author.id);
      }
      catch(e){};
    return options;
  },
  setValue: function(){
    if (this.props.course.author){
      return this.props.course.author.id;
    }
  },
  
  render: function() {
    return (
       <form>
          <h1>Manage Course</h1>
          <Input 
            name="title"
            label="Title"
            value={this.props.course.title}
            onChange={this.props.onChange} 
            error={this.props.errors.title} />
      
           <SelectList 
            name="author"
            label="Author"
            onChange={this.props.onChange} 
            error={this.props.errors.course}
            defaultItem={this.setValue()}
            items={this.getItems()}/>

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
      </form>
      );
  }
});

module.exports = CourseForm;