$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $("body").addClass("color-change-body");
    }
    if ($(this).scrollTop() < 700) {
      $("body").removeClass("color-change-body");
    }
  })
});
