var TemplateView = require('./TemplateView');

var ProjectView = TemplateView.extend({
  template: 'project',
  initialize: function () {
    var that = this;
    TemplateView.prototype.initialize.call(that);
    that.model.fetch({
      success: function () {
        that.render();
      },
      error: function () {
        that.$el.html('<div class="alert alert-danger" role="alert">Error: Server is not responding.</div>');
      }
    });
  },
  events: {
    "click .js-btn-cancel": "backNotSave",
    "click .js-btn-submit": "backAndSave"
  },
  getContext: function () {
    return {
      title: this.model.get('name')
    }
  },
  backNotSave: function() {
    console.log('Close project without saving');
    window.history.back();
  },
  backAndSave: function() {
    console.log('Save and close project');
    window.history.back();
  }
});

module.exports = ProjectView;
