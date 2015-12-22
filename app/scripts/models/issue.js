var Issue = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    status: 'new'
  },
  changeStatus: function (status) {
    this.save({
      status: status
    });
  }
});

module.exports = Issue;
