var Project = require('./../models/Project');

var CollectionProject = Backbone.Collection.extend({
  model: Project,
  url: 'http://private-1e135-podivilovevgeniyapiaryio.apiary-mock.com/projects',
  initialize: function () {
    //this.listenTo(this, 'create', this.newProject);
    //this.listenTo(this, 'remove', this.removeProject);
    //this.listenTo(this, 'change', this.changeIssue);
  },
  newProject: function (newProject) {
    console.log('Add ' + newProject.get('name'));
  },
  removeProject: function (removedProject) {
    console.log('Remove ' + removedProject.get('name'));
  },
  changeIssue: function (changedIssue) {
    console.log('Change ' + changedIssue.get('title'));
  }
});

module.exports = CollectionProject;
