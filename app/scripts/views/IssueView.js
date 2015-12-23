var TemplateView = require('./TemplateView');

var IssueView = TemplateView.extend({
  template: 'issue',
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
      title: this.model.get('title'),
      description: this.model.get('description')
    }
  },

  backNotSave: function() {
    console.log('Close issue without saving');
    window.history.back();
  },

  backAndSave: function() {
    console.log('Save and close issue');
    window.history.back();
  }
});

module.exports = IssueView;
