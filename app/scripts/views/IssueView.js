var TemplateModelView = require('./TemplateModelView');

var IssueView = TemplateModelView.extend({
  el: 'body',
  template: 'issue',
  getContext: function () {
    return {
      title: this.model.get('title'),
      description: this.model.get('description')
    }
  },
  render: function (model) {
    this.delegateEvents({
      "click .js-btn-cancel": "backNotSave",
      "click .js-btn-submit": "backAndSave"
    });
    this.model = model || this.model;
    var template = templates[this.template];
    this.modal = $(template.render(this.getContext()));
    this.modal.modal('show');
  },
  backNotSave: function() {
    console.log('Close project without saving');
    this.modal.modal('hide').empty();
    this.undelegateEvents();
  },
  backAndSave: function() {
    console.log($('#titleText').val());
    console.log('Save and close project');
    this.modal.modal('hide').empty();
    this.undelegateEvents();
  }
});

module.exports = IssueView;
