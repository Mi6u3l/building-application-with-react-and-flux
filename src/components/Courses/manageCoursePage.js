"use strict"

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var CourseForm = require('./courseForm');
var AuthorStore = require('../../stores/authorStore');
var CourseStore = require('../../stores/CourseStore');
var CourseActions = require('../../actions/courseActions');


var ManageCoursePage = React.createClass({
  mixins: [
    Router.Navigation
  ],
 

getInitialState: function() {
    return {
      course: {id: '', title: ''},
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function(){
    var courseId = this.props.params.id;
    if(courseId) {
      this.setState({course: CourseStore.getCourseById(courseId)});
    }
  },


  setCourseState: function(event){
    this.state.course.author = [];
    this.state.course.author['id'] = 'corey-house';
    this.state.course.author['name'] = 'Cory House';


    var field = event.target.name;
    var value = event.target.value;

    if (field === 'author'){
      var author = AuthorStore.getAuthorById(value);
      this.state.course.author = [];
      this.state.course.author['id'] = author.id;
      this.state.course.author['name'] = author.firstName + ' ' + author.lastName;

    } else {
      this.state.course[field] = value;
    }

    return this.setState({course: this.state.course });
  },

  saveCourse: function(event){
    event.preventDefault();
    CourseActions.createCourse(this.state.course);
    toastr.success('course saved.');
    this.transitionTo('courses');
  },


  render: function() {
     return (
        <CourseForm 
          course={this.state.course}
          onChange={this.setCourseState}
          onSave={this.saveCourse}
          errors={this.state.errors} />
        
      );
  }
});

module.exports = ManageCoursePage;