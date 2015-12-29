var TemplateView = require('./TemplateView');

var TemplateModelView = TemplateView.extend({
  initialize: function () {
    if(this.model.get('id') == undefined) {
      this.editModel();
    } else {
      this.render();
    }
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }
});

module.exports = TemplateModelView;
