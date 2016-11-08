'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');

var CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

 
  render: function() {
    var createCourseRow = function(course) {
      return (
        <tr key={course.id}>
          <td><a href="#" onClick=''>Watch</a></td>
          <td><a href="#" onClick=''>Delete</a></td>
          <td><Link to="manageCourse" params={{id: course.id}}>{course.title}</Link></td>
          <td>{course.author.name}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th></th>
            <th>Title</th>
            <th>Author</th>
          </thead>
          <tbody>
            {this.props.courses.map(createCourseRow, this)}
          </tbody>
        </table>
      </div>

      );
  }
});

module.exports = CourseList;