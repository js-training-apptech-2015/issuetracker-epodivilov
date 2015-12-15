(function () {
  'use strict';
  var TemplateView = Backbone.View.extend({
    render: function () {
      var template = templates[this.template];
      this.$el.html(template.render(this.getContext()));
    },
    getContext: function () {
      return this.model ? this.model.toJSON() : {};
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

  $(function () {
    var mainView = new MainView({
      el: $('#application')
    });
    mainView.render();
  });
})();
