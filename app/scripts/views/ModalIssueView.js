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
    this.$el.find('#status').val(this.model.get('status'));
    return this;
  },
  cancelModal: function () {
    if(this.model.get('id') == undefined) {
      this.model.destroy({wait: false});
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
    if(this.model.get('id') == undefined) {
      newIssue.id = newIssue.title.replace(/\s+/g, '');
    }
    this.model.save(newIssue,{ wait: false });

    this.$el.modal('hide').empty();
    this.undelegateEvents();
  },
  removeModal: function () {
    this.model.destroy({wait: false});
    this.$el.modal('hide').empty();
    this.undelegateEvents();
  }
});

module.exports = ModalIssueView;

