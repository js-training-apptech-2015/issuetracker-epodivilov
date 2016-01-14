module.exports.showDangerAlert = function (message) {
  var alertDiv = $('<div class="alert alert-danger fade" id="danger-alert"><strong>Error! </strong> ' + message + '</div>');
  $('.js-body').prepend(alertDiv);
  alertDiv.alert();
  alertDiv.fadeTo(2000, 500).slideUp(500, function(){
    $("#danger-alert").alert('close');
  });
};
