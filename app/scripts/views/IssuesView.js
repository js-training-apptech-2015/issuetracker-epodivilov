var TemplateView = require('./TemplateView');
var IssueView = require('./IssueView');

var IssuesView = TemplateView.extend({
  template: 'issues',
  render: function () {
    var element = $(this.el);
    var template = templates[this.template];
    var that = this;
    this.collection.forEach(function (item) {
      element.append(template.render(that.getContext(item)));
    });
  },
  getContext: function (item) {
    return {
      id: item.get('id'),
      title: item.get('title'),
      description: item.get('description'),
      main: Backbone.history.location.hash
    }
  },
  renderIssue: function (id) {

  }
});

module.exports = IssuesView;
