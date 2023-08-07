const urls = 'http://0.0.0.0:5001/api/v1/status/';
$(document).ready(function () {
  const AmenityID = {};
  $('input').change(function () {
    if ($(this).is(':checked')) {
      AmenityID[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete AmenityID[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(AmenityID).join(', '));
  });

  $.get(urls, function (status) {
    const Cls = 'available';
    const ApiStat = $('div#api_status');

    if (status.status === 'OK') {
      ApiStat.addClass(Cls);
    } else {
      ApiStat.removeClass(Cls);
    }
  });
});
