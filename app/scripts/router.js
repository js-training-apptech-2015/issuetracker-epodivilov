module.exports = Backbone.Router.extend({
  routes: {
    "": "start",
    "!/": "start",
    "Uno": "uno",
    "Duo": "duo",
    "Tres": "tres"
  }
});
