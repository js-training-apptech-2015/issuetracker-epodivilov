var TemplateView = require('./TemplateView');
var IssueView = require('./IssueView');

var IssuesView = TemplateView.extend({
  template: 'issues',
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
    var template = templates[that.template];
    that.$el.append('<div><ol class="breadcrumb"><li><a href="/">Home</a></li>' +
      '<li class="active">' + that.collection.projectID + '</li></ol></div>');
    that.collection.forEach(function (item) {
      that.$el.append(template.render(that.getContext(item)));
    });
  },
  getContext: function (item) {
    return {
      id: item.get('id'),
      title: item.get('title'),
      description: item.get('description'),
      main: Backbone.history.location.hash
    }
  }
});

module.exports = IssuesView;
