var TemplateView = Backbone.View.extend({
  render: function () {
    var template = templates[this.template];
    this.$el.html(template.render(this.getContext()));
  },
  getContext: function () {
    return this.model ? this.model.toJSON() : {};
  }
});

var ProjectListView = TemplateView.extend({
  template: 'project-list',
  getContext: function () {
    return {
      projects: [{name: 'Uno'}, {name: 'Duo'}, {name: 'Tres'}]
    }
  }
});

var BodyMessage = TemplateView.extend({
  template: 'body-message',
  getContext: function () {
    return {
      message: this.text
    }
  }
});

var MainView = TemplateView.extend({
  template: 'main',
  render: function () {
    TemplateView.prototype.render.call(this);
    this.projectListView = new ProjectListView({
      el: this.$('.js-project-list')
    });
    this.projectListView.render();
    this.bodyMessage = new BodyMessage({
      el: this.$('.js-body-message')
    });
    this.bodyMessage.text = this.curentPage;
    this.bodyMessage.render();
  }
});

module.exports.MainView = MainView;
