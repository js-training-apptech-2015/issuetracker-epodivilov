var TrackerRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.mainPage = options.mainPage;
  },
  routes: {
    '' : 'index',
    '*project/:issue': 'issue',
    '*project' : 'project'
  },
  issue: function (project, issue) {
    this.mainPage.renderIssue(issue);
  },
  project: function (project) {
    this.mainPage.renderProject(project);
  },
  index: function () {
    this.mainPage.renderIndex();
  }
});

module.exports = TrackerRouter;
