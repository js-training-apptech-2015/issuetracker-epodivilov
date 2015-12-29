var TemplateCollectionView = require('./TemplateCollectionView');
var ItemListOfProjectsView = require('./ItemListOfProjectsView');

var ProjectsView = TemplateCollectionView.extend({
  renderOnce: function (model) {
    var itemListOfProjectsView = new ItemListOfProjectsView({
      el: $('<div class="list-group"></div>'),
      model: model
    });
    this.$el.append(itemListOfProjectsView.el);
  }
});

module.exports = ProjectsView;

