var Issue = require('./../models/issue');

var CollectionIssue = Backbone.Collection.extend({
  model: Issue
});

module.exports = CollectionIssue;

