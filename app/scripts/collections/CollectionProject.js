var Project = require('./../models/Project');

var CollectionProject = Backbone.Collection.extend({
  model: Project,
  url: 'http://private-1e135-podivilovevgeniyapiaryio.apiary-mock.com/projects'
});

module.exports = CollectionProject;
