var TrackerRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.mainPage = options.mainPage;
  },
  routes: {
    '' : 'index',
    'add': 'addProject',
    '*project/add': 'addIssue',
    '*project/:issue': 'issue',
    '*project' : 'project'
  },
  addProject: function () {
    this.mainPage.addProject();
    window.history.back();
  },
  addIssue: function (project) {
    this.mainPage.addIssue(project);
    window.history.back();
  },
  project: function (project) {
    this.mainPage.listOfIssues(project);
  },
  index: function () {
    this.mainPage.listOfProjects();
  }
});

module.exports = TrackerRouter;
