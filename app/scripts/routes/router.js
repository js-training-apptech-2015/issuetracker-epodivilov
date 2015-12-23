var TrackerRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.mainPage = options.mainPage;
  },
  routes: {
    '' : 'index',
    'del?*project':'removeProject',
    'edit?*project':'editProject',
    '*project/:issue': 'issue',
    '*project' : 'project'
  },
  removeProject: function (project) {
    console.log('Remove ' + project);
  },
  editProject: function (project) {
    this.mainPage.editProject(project);
  },
  issue: function (project, issue) {
    this.mainPage.renderIssue(project, issue);
  },
  project: function (project) {
    this.mainPage.renderProject(project);
  },
  index: function () {
    this.mainPage.renderIndex();
  }
});

module.exports = TrackerRouter;
