var Issue = require('./../models/Issue');

var CollectionIssue = Backbone.Collection.extend({
  model: Issue,
  projectID: null,
  url: function () {
    return 'http://private-1e135-podivilovevgeniyapiaryio.apiary-mock.com/' + this.projectID;
  },
  initialize: function () {
    this.listenTo(this, 'create', this.newIssue);
    this.listenTo(this, 'remove', this.removeIssue);
  },
  newIssue: function (newIssue) {
    console.log('Add ' + newIssue.get('title'));
  },
  removeIssue: function (removedIssue) {
    console.log('Remove ' + removedIssue.get('title'));
  }
});

module.exports = CollectionIssue;

