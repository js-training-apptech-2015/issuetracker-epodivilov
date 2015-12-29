var TemplateCollectionView = require('./TemplateCollectionView');
var ItemListOfIssuesView = require('./ItemListOfIssuesView');

var IssuesView = TemplateCollectionView.extend({
  renderOnce: function (model) {
    var itemListOfIssuesView = new ItemListOfIssuesView({
      el: $('<button type="button" class="list-group-item js-btn-issue"></button>'),
      model: model
    });
    this.$el.append(itemListOfIssuesView.el);
  }
});

module.exports = IssuesView;
