var TrackerRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.mainPage = options.mainPage;
  },
  routes: {
    '' : 'index',
    'add': 'addProject',
    '*project/add': 'addIssue',
    'del?*project':'removeProject',
    'edit?*project':'editProject',
    '*project/:issue': 'issue',
    '*project' : 'project'
  },
  addProject: function () {
    this.mainPage.addProject();
    window.history.back();
  },
  editProject: function (project) {
    this.mainPage.singleProject(project);
    window.history.back();
  },
  removeProject: function (project) {
    this.mainPage.removeProject(project);
    window.history.back();
  },
  addIssue: function (project) {
    this.mainPage.addIssue(project);
    window.history.back();
  },
  issue: function (project, issue) {
    this.mainPage.singleIssue(project, issue);
  },
  project: function (project) {
    this.mainPage.listOfIssues(project);
  },
  index: function () {
    this.mainPage.listOfProjects();
  }
});

module.exports = TrackerRouter;
