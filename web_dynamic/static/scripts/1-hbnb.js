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
});
