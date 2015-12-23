var TemplateView = Backbone.View.extend({
  initialize: function() {
    this.listenTo((this.model || this.collection), 'request', this.showProgress); //start fetching
    this.listenTo((this.model || this.collection), 'sync', this.hideProgress); //finish fetching
  },
  render: function () {
    var template = templates[this.template];
    this.$el.html(template.render(this.getContext()));
  },
  getContext: function () {
    return this.model ? this.model.toJSON() : {};
  },
  showProgress: function () {
    this.$el.html('<img src="/ajax-loader.gif" id="loading-indicator" class="center-block"/>');
  },
  hideProgress: function () {
    this.$el.find('img').remove();
  }
});

module.exports = TemplateView;
