var Project = Backbone.Model.extend({
  initialize: function(options) {
    this.projectID = options.projectID;
    this.id = options.id;
  },
  url: function () {
    return 'http://private-1e135-podivilovevgeniyapiaryio.apiary-mock.com/edit?' + this.projectID;
  }
});

module.exports = Project;
