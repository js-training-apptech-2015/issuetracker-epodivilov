var TemplateModelView = require('./TemplateModelView');
var ModalIssueView = require('./ModalIssueView');

var ItemListOfIssueView = TemplateModelView.extend({
  template: 'ItemListOfIssues',
  events: {
    'click': 'editModel'
  },
  editModel: function () {
    var modalView = new ModalIssueView({
      el: $('.js-modal-view'),
      model: this.model
    });
    modalView.$el.modal('show');
  }
});

module.exports = ItemListOfIssueView;
