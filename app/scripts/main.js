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

  var Controller = Backbone.Router.extend({
    routes: {
      "": "start",
      "!/": "start",
      "Uno": "uno",
      "Duo": "duo",
      "Tres": "tres"
    },

    start: function () {
      $(function () {
        var mainView = new MainView({
          el: $('#application')
        });

        mainView.getContext = function () {
          return {
            message: 'Hello World!'
          }
        };

        mainView.render();
      });
    },

    uno: function () {
      $(function () {
        var mainView = new MainView({
          el: $('#application')
        });

        mainView.getContext = function () {
          return {
            message: 'Uno view'
          }
        };

        mainView.render();
      });
    },

    duo: function () {
      $(function () {
        var mainView = new MainView({
          el: $('#application')
        });

        mainView.getContext = function () {
          return {
            message: 'Duo view'
          }
        };

        mainView.render();
      });
    },

    tres: function () {
      $(function () {
        var mainView = new MainView({
          el: $('#application')
        });

        mainView.getContext = function () {
          return {
            message: 'Tres view'
          }
        };

        mainView.render();
      });
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

  var controller = new Controller();
  Backbone.history.start();

})();
