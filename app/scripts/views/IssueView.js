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
    this.modal.find('#status').val(this.model.get('status'));
    this.modal.modal('show');
  },
  backNotSave: function() {
    console.log('Close project without saving');
    this.modal.modal('hide').empty();
    this.undelegateEvents();
  },
  backAndSave: function() {
    var newName = $('#titleText').val();
    var newDescription = $('#descriptionText').val();
    var newStatus = $('#status').val();

    this.model.save({
      title: newName,
      description: newDescription,
      status: newStatus
    },{
      wait: false,
      success: function (model, response) {
        model.trigger('change', model);
      },
      error: function (model, response) {
        model.trigger('change', model);
      }
    });

    this.modal.modal('hide').empty();
    this.undelegateEvents();
  }
});

module.exports = IssueView;
