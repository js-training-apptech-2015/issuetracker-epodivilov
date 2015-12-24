var TemplateView = require('./TemplateView');

var TemplateModelView = TemplateView.extend({
  initialize: function() {
    this.render();
  },
  showProgress: function () {
    this.$el.html('<img src="/ajax-loader.gif" id="loading-indicator" class="center-block"/>');
  },
  hideProgress: function () {
    this.$el.find('img').remove();
  }
});

module.exports = TemplateModelView;

