var TemplateModelView = require('./TemplateModelView');

var ProjectView = TemplateModelView.extend({
  el: 'body',
  template: 'project',
  getContext: function () {
    return {
      title: this.model.get('name')
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

module.exports = ProjectView;
