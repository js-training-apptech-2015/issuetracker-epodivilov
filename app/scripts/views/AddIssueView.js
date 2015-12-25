var TemplateModelView = require('./TemplateModelView');

var AddIssueView = TemplateModelView.extend({
  el: 'body',
  template: 'addIssue',
  initialize: function(options) {
    this.mainPage = options.mainPage;
    this.currentProject = options.currentProject;
    TemplateModelView.prototype.initialize.call(this);
  },
  render: function (currentProject) {
    this.currentProject = currentProject || this.currentProject;
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
    var newDescription = $('#descriptionText').val();

    var newIssue = {
      id: newName.replace(/\s+/g, ''),
      title: newName,
      description: newDescription,
      status: "new"
    };

    this.mainPage.projects.get(this.currentProject).get('issues').create(newIssue, {
      wait: false,
      success: function (model, response) {
        model.trigger('create', model);
      },
      error: function (model, response) {
        model.trigger('create', model);
      }
    });

    this.mainPage.listOfIssues(this.currentProject);

    this.modal.modal('hide').empty();
    this.undelegateEvents();
  }
});

module.exports = AddIssueView;
