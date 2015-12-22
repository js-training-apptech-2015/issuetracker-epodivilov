var Project = require('./../models/project');

var CollectionProject = Backbone.Collection.extend({
  model: Project,
  url: 'http://www.mocky.io/v2/567905212500003104af014e'
});

module.exports = CollectionProject;
