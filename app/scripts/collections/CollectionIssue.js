var Issue = require('./../models/Issue');

var CollectionIssue = Backbone.Collection.extend({
  model: Issue,
  projectID: null,
  url: function () {
    return 'https://issue-tracker-server.herokuapp.com/projects/' + this.projectID;
  },
  initialize: function () {
    //this.listenTo(this, 'create', this.newIssue);
    //this.listenTo(this, 'remove', this.removeIssue);
    //this.listenTo(this, 'change', this.changeIssue);
  },
  newIssue: function (newIssue) {
    console.log('Add ' + newIssue.get('title'));
  },
  removeIssue: function (removedIssue) {
    console.log('Remove ' + removedIssue.get('title'));
  },
  changeIssue: function (changedIssue) {
    console.log('Change ' + changedIssue.get('title'));
  }
});

module.exports = CollectionIssue;

