var Issue = require('./../models/issue');

var CollectionIssue = Backbone.Collection.extend({
  model: Issue,
  projectID: null,
  url: function () {
    return 'http://private-1e135-podivilovevgeniyapiaryio.apiary-mock.com/' + this.projectID;
  }
});

module.exports = CollectionIssue;

