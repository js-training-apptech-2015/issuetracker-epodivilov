var TemplateView = require('./TemplateView');

var ModalIssueView = TemplateView.extend({
  template: 'ModalIssue',
  events: {
    "click .js-btn-cancel": "cancelModal",
    "click .js-btn-submit": "submitModal",
    "click .js-btn-remove": "removeModal"
  },
  initialize: function() {
    this.render();
  },
  render: function () {
    TemplateView.prototype.render.call(this);
    this.$el.find('#status').val(this.model.get('status')||'new');
    return this;
  },
  cancelModal: function () {
    if(this.model.isNew()) {
      this.model.destroy();
    }
    this.$el.modal('hide').empty();
    this.undelegateEvents();
  },
  submitModal: function () {
    var newIssue = {
      title: $('#titleText').val(),
      description: $('#descriptionText').val(),
      status: $('#status').val()
    };
    this.model.save(newIssue, {
      wait: true,
      success: function (model, response) {
        model.save(response);
      },
      error: function (model, response) {
        console.log(response);
      }
    });

    this.$el.modal('hide').empty();
    this.undelegateEvents();
  },
  removeModal: function () {
    this.model.destroy({wait: true});
    this.$el.modal('hide').empty();
    this.undelegateEvents();
  }
});

module.exports = ModalIssueView;

