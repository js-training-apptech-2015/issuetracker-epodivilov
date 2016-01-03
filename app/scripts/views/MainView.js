var TemplateView = require('./TemplateView');

var ListOfProjectsView = require('./ListOfProjectsView');
var ListOfIssuesView = require('./ListOfIssuesView');

var CollectionIssue = require('../collections/CollectionIssue');
var CollectionProject = require('../collections/CollectionProject');



var MainView = TemplateView.extend({
  el: $('#application'),
  template: 'main',
  events: {
    'click .js-btn-add':'addItem'
  },
  initialize: function() {
    this.projects = new CollectionProject();
    this.render();
  },
  listOfProjects: function () {
    $('.js-body').html('');

    if(this.listOfProjectsView) {
      this.listOfProjectsView.renderAll();
    } else {
      this.listOfProjectsView = new ListOfProjectsView({
        el: $('.js-body'),
        collection: this.projects
      });
    }
  },
  listOfIssues: function (project) {
    $('.js-body').html('');

    var selectedProject = this.projects.get(project);
    if(!selectedProject.get('issues')) {
      selectedProject.set({
        issues: new CollectionIssue()
      });
      selectedProject.get('issues').projectID = project;
    }


    if(selectedProject.listOfIssuesView) {
      selectedProject.listOfIssuesView.renderAll();
    } else {
      selectedProject.listOfIssuesView = new ListOfIssuesView({
        el: $('.js-body'),
        collection: selectedProject.get('issues')
      });
    }

  },
  addItem: function () {
    var url = Backbone.history.fragment;
    if(url.length === 0) {
      this.projects.add({});
    } else {
      this.projects.get(url).get('issues').add({})
    }
  }
});

module.exports = MainView;
