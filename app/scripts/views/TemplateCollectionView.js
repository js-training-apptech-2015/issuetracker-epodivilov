var TemplateView = require('./TemplateView');

var TemplateCollectionView = TemplateView.extend({
  initialize: function() {
    var context = this;

    this.listenTo(context.collection, 'request', this.showProgress);
    this.listenTo(context.collection, 'sync', this.hideProgress);

    if(context.collection.length == 0) {
      context.collection.fetch({
        success: function () {
          context.render();
        },
        error: function () {
          context.$el.html('<div class="alert alert-info" role="alert">The current project has not yet created issues. <br> Create a issue by clicking the '+' at the top of the page</div>');
        }
      },{add: true})
    } else {
      context.render();
    }
  },
  showProgress: function () {
    this.$el.html('<img src="/ajax-loader.gif" id="loading-indicator" class="center-block"/>');
  },
  hideProgress: function () {
    this.$el.find('img').remove();
  }
});

module.exports = TemplateCollectionView;
