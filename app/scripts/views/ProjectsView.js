var TemplateView = require('./TemplateView');
var ProjectView = require('./ProjectView');

var ProjectsView = TemplateView.extend({
  template: 'projects',
  initialize: function () {
    var that = this;
    TemplateView.prototype.initialize.call(that);
    that.collection.fetch({
      success: function () {
        that.render();
      },
      error: function () {
        that.$el.html('<div class="alert alert-danger" role="alert">Error: Server is not responding.</div>');
      }
    });
  },
  render: function () {
    var that = this;
    var template = templates[this.template];
    this.collection.forEach(function (item) {
      that.$el.append(template.render(that.getContext(item)));
    });
  },
  getContext: function (item) {
    return {
      id: item.get('id'),
      name: item.get('name')
    }
  }
});

module.exports = ProjectsView;

