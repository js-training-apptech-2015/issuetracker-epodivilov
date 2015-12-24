var TemplateView = require('./TemplateView');
var IssuesView = require('./IssuesView');
var IssueView = require('./IssueView');
var ProjectsView = require('./ProjectsView');
var ProjectView = require('./ProjectView');
var AddProjectView = require('./AddProjectView');

var CollectionIssue = require('../collections/CollectionIssue');
var CollectionProject = require('../collections/CollectionProject');

var projects = new CollectionProject();

var MainView = TemplateView.extend({
  el: $('#application'),
  template: 'main',
  listOfProjects: function () {
    TemplateView.prototype.render.call(this);
    new ProjectsView({
      el: $('.js-body'),
      collection: projects
    });
  },
  listOfIssues: function (project) {
    TemplateView.prototype.render.call(this);

    var selectedProject = projects.get(project);
    if(!selectedProject.get('issues')) {
      selectedProject.set({
        issues: new CollectionIssue()
      });
      selectedProject.get('issues').projectID = project;
    }

    $('<li><a href="#'+ selectedProject.get('id') +'">'+ selectedProject.get('name') +'</a></li>').insertBefore('.project-add');
    $('.js-btn-add').attr("href", '#'+ selectedProject.get('id') + '/add');

    new IssuesView({
      el: $('.js-body'),
      collection: selectedProject.get('issues')
    });
  },
  singleIssue: function (project, issue) {
    var selectedIssue = projects.get(project).get('issues').get(issue);

    if (this.issueView) {
      this.issueView.render(selectedIssue);
    } else {
      this.issueView = new IssueView({
        model: selectedIssue
      });
    }
  },
  singleProject: function (project) {
    var selectedProject = projects.get(project);

    if (this.projectView) {
      this.projectView.render(selectedProject);
    } else {
      this.projectView = new ProjectView({
        model: selectedProject
      });
    }
  },
  addProject: function () {
    if (this.addProjectView) {
      this.addProjectView.render();
    } else {
      this.addProjectView = new AddProjectView();
    }
  }
});

module.exports = MainView;
