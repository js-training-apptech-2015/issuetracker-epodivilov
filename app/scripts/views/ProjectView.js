var TemplateView = require('./TemplateView');

var ProjectView = TemplateView.extend({
  template: 'project',
  render: function () {
    var template = templates[this.template];
    this.$el.append(template.render(this.getContext()));
  },
  getContext: function () {
    return {
      id: this.model.get('id'),
      name: this.model.get('name')
    }
  }
});

module.exports = ProjectView;
