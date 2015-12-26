var TemplateModelView = require('./TemplateModelView');

var AddProjectView = TemplateModelView.extend({
  el: 'body',
  template: 'addProject',
  initialize: function(options) {
    this.mainPage = options.mainPage;
    TemplateModelView.prototype.initialize.call(this);
  },
  render: function () {
    this.delegateEvents({
      "click .js-btn-cancel": "backNotSave",
      "click .js-btn-submit": "backAndSave"
    });
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
    var newName = $('#titleText').val();
    var newProject = {
      name: newName,
      id: newName.replace(/\s+/g, '')
    };

    this.mainPage.projects.create(newProject, {
      wait: false,
      success: function (model, response) {
        model.trigger('create', model);
      },
      error: function (model, response) {
        model.trigger('create', model);
      }
    });

    this.mainPage.listOfProjects();

    this.modal.modal('hide').empty();
    this.undelegateEvents();
  }
});

module.exports = AddProjectView;
