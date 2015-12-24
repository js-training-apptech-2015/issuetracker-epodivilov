var TemplateCollectionView = require('./TemplateCollectionView');

var ProjectsView = TemplateCollectionView.extend({
  template: 'projects',
  render: function () {
    var that = this;
    var template = templates[this.template];
    this.collection.forEach(function (item) {
      that.$el.append(template.render(that.getContext(item)));
    });
  },
  getContext: function (item) {
    return {
      id: item.get('id'),
      name: item.get('name')
    }
  }
});

module.exports = ProjectsView;

