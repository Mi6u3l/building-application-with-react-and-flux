"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
  createCourse: function (course) {
      var newCourse = CourseApi.saveCourse(course);
      //Hey dispatcher, go tell all the stores that an author was just created
      Dispatcher.dispatch({
        actionType: ActionTypes.CREATE_COURSE,
        course: newCourse
      });
  }

};

module.exports = CourseActions;