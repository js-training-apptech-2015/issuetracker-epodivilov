var Project = require('./../models/Project');

var CollectionProject = Backbone.Collection.extend({
  model: Project,
  url: 'http://private-1e135-podivilovevgeniyapiaryio.apiary-mock.com/projects',
  initialize: function () {
    this.listenTo(this, 'create', this.addProject);
    this.listenTo(this, 'remove', this.removeProject);
  },
  addProject: function (newProject) {
    console.log('Add ' + newProject.get('name'));
  },
  removeProject: function (removedProject) {
    console.log('Remove ' + removedProject.get('name'));
  }
});

module.exports = CollectionProject;
