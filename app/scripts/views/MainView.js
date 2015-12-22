var TemplateView = require('./TemplateView');
var IssuesView = require('./IssuesView');
var IssueView = require('./IssueView');
var ProjectsView = require('./ProjectsView');

var CollectionIssue = require('../collections/CollectionIssue');
var CollectionProject = require('../collections/CollectionProject');


var MainView = TemplateView.extend({
  el: $('#application'),
  template: 'main',
  projects:null,
  renderIndex: function () {
    var mainView = this;
    TemplateView.prototype.render.call(mainView);
    mainView.projects = new ProjectsView({
      el: $('.js-body'),
      collection: new CollectionProject()
    });
    mainView.projects.collection.fetch({
      success: function (collection, response) {
        mainView.projects.render();
      }
    });
  },
  renderProject: function (project) {
    TemplateView.prototype.render.call(this);
    this.issues = new CollectionIssue(this.projects.collection.get(project).get('issues'));
    var issuesView = new IssuesView({
      el: $('.js-body'),
      collection: this.issues
    });
    issuesView.render();
  },
  renderIssue: function (issue) {
    TemplateView.prototype.render.call(this);
    console.log(this.issues.get(issue).get('title'));
    var issueView = new IssueView({
      el: $('.js-body'),
      model: this.issues.get(issue)
    });
    issueView.render();
  }
});

module.exports = MainView;
