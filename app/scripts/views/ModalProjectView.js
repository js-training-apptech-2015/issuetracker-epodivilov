var TemplateView = require('./TemplateView');
var showDangerAlert = require('../utils/Alert').showDangerAlert;

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
    if(this.model.isNew()) {
      this.model.destroy();
    }
    this.$el.modal('hide').empty();
    this.undelegateEvents();
  },
  submitModal: function () {
    var newProject = {
      name: $('#projectName').val()
    };
    this.model.save(newProject,{
      wait: true,
      success: function (model, response) {
        model.save(response);
      },
      error: function (model, response) {
        showDangerAlert(response.responseJSON);
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

module.exports = ModalProjectView;
