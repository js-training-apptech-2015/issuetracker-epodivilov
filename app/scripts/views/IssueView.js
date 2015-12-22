var TemplateView = require('./TemplateView');

var IssueView = TemplateView.extend({
  template: 'issue',
  getContext: function () {
    return {
      title: this.model.get('title'),
      description: this.model.get('description')
    }
  }
});

module.exports = IssueView;
