var TemplateCollectionView = require('./TemplateCollectionView');

var IssuesView = TemplateCollectionView.extend({
  template: 'issues',
  render: function () {
    var that = this;
    var template = templates[that.template];
    that.$el.append('<div class="list-group"></div>');
    that.collection.forEach(function (item) {
      that.$el.find('.list-group').append(template.render(that.getContext(item)));
    });
  },
  getContext: function (item) {
    return {
      id: item.get('id'),
      title: item.get('title'),
      description: item.get('description'),
      main: Backbone.history.location.hash
    }
  }
});

module.exports = IssuesView;
