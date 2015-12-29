var TemplateModelView = require('./TemplateModelView');
var ModalProjectView = require('./ModalProjectView');

var ItemListOfProjectsView = TemplateModelView.extend({
  template: 'ItemListOfProjects',
  events: {
    'click .js-btn-edit': 'editModel'
  },
  editModel: function () {
    var modalView = new ModalProjectView({
      el: $('.js-modal-view'),
      model: this.model
    });
    modalView.$el.modal('show');
  }
});

module.exports = ItemListOfProjectsView;
