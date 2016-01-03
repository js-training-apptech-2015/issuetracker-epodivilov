var TemplateView = require('./TemplateView');

var TemplateCollectionView = TemplateView.extend({
  initialize: function() {
    this.listenTo(this.collection, 'request', this.showProgress);
    this.listenTo(this.collection, 'sync', this.hideProgress);
    this.listenTo(this.collection, 'add', this.addItem);

    var context = this;
    if(this.collection.length == 0) {
      this.collection.fetch({
        silent: true,
        success: function (model, response) {
          context.renderAll();
        },
        error: function () {
          context.$el.html('<div class="alert alert-danger" role="alert">Server is not response</div>');
        }
      })
    }
  },
  showProgress: function (context) {
    if (context instanceof Backbone.Collection) {
      this.$el.html('<img src="/ajax-loader.gif" id="loading-indicator" class="center-block"/>');
    }
  },
  hideProgress: function (context) {
    this.$el.find('img').remove();
  },
  renderAll: function () {
    var that = this;
    this.collection.forEach(function (item) {
      that.renderOnce(item);
    });
    if(this.collection.length == 0) {
      this.$el.html('<div class="alert alert-info" role="alert">The current project has not yet created issues. <br> Create a issue by clicking the '+' at the top of the page</div>');
    }
  },
  addItem: function (context) {
    this.$el.find('.alert').remove();
    this.renderOnce(context);
  }
});

module.exports = TemplateCollectionView;
