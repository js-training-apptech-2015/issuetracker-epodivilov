(function () {
  'use strict';

  var MainView = require('./View').MainView;
  var Router = require('./router');

  var controller = new Router();

  var mainView = new MainView({
    el: $('#application')
  });

  controller.on('route:start', function () {
    mainView.curentPage = 'Main view';
    mainView.render();
  });

  controller.on('route:uno', function () {
    mainView.curentPage = "Uno view";
    mainView.render();
  });

  controller.on('route:duo', function () {
    mainView.curentPage = "Duo view";
    mainView.render();
  });

  controller.on('route:tres', function () {
    mainView.curentPage = "Tres view";
    mainView.render();
  });

  Backbone.history.start();
})();
