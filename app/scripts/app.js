'use strict';

var MainView = require('./views/MainView');
var TrackerRouter = require('./routes/router');

var main = new MainView();
var router = new TrackerRouter({
  mainPage: main
});

Backbone.history.start();


