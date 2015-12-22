var Project = Backbone.Model.extend({
  defaults : function() {
    return {
      id: null,
      name : 'New project'
    };
  }
});

module.exports = Project;
