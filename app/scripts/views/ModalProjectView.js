var TemplateView = require('./TemplateView');

var ModalProjectView = TemplateView.extend({
  template: 'ModalProject',
  events: {
    'click .js-btn-cancel': 'cancelModal',
    'click .js-btn-submit': 'submitModal',
    'click .js-btn-remove': 'removeModal'
  },
  initialize: function() {
    this.render();
  },
  cancelModal: function () {
    if(this.model.get('id') == undefined) {
      this.model.destroy({wait: false});
    }
    this.$el.modal('hide').empty();
    this.undelegateEvents();
  },
  submitModal: function () {
    var newProject = {
      name: $('#projectName').val()
    };
    if(this.model.get('id') == undefined) {
      newProject.id = newProject.name.replace(/\s+/g, '');
    }
    this.model.save(newProject,{ wait: false });

    this.$el.modal('hide').empty();
    this.undelegateEvents();
  },
  removeModal: function () {
    this.model.destroy({wait: false});
    this.$el.modal('hide').empty();
    this.undelegateEvents();
  }
});

module.exports = ModalProjectView;
