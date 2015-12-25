var Issue = require('./../models/Issue');

var CollectionIssue = Backbone.Collection.extend({
  model: Issue,
  projectID: null,
  url: function () {
    return 'http://private-1e135-podivilovevgeniyapiaryio.apiary-mock.com/' + this.projectID;
  },
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

module.exports = CollectionIssue;

