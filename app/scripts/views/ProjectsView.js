var TemplateView = require('./TemplateView');
var ProjectView = require('./ProjectView');

var ProjectsView = TemplateView.extend({
  render: function () {
    var element = $(this.el);
    this.collection.forEach(function (item) {
      var itemView = new ProjectView({
        el: element,
        model: item
      });
      element.append(itemView.render());
    });
    return this;
  }
});

module.exports = ProjectsView;

