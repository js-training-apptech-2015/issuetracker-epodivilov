var TemplateView = require('./TemplateView');
var IssuesView = require('./IssuesView');
var IssueView = require('./IssueView');
var ProjectsView = require('./ProjectsView');
var ProjectView = require('./ProjectView');

var CollectionIssue = require('../collections/CollectionIssue');
var CollectionProject = require('../collections/CollectionProject');
var Issue = require('../models/issue');
var Project = require('../models/project');

var MainView = TemplateView.extend({
  el: $('#application'),
  template: 'main',
  projects:null,
  renderIndex: function () {
    TemplateView.prototype.render.call(this);
    new ProjectsView({
      el: $('.js-body'),
      collection: new CollectionProject()
    });
  },
  renderProject: function (project) {
    TemplateView.prototype.render.call(this);
    new IssuesView({
      el: $('.js-body'),
      collection: new CollectionIssue({ projectID: project })
    });
  },
  renderIssue: function (project, issue) {
    TemplateView.prototype.render.call(this);
    new IssueView({
      el: $('.js-body'),
      model: new Issue({
        projectID: project,
        id: issue
      })
    });
  },
  editProject: function (project) {
    TemplateView.prototype.render.call(this);
    new ProjectView({
      el: $('.js-body'),
      model: new Project({ projectID: project })
    });
  }
});

module.exports = MainView;
