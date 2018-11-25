$(document).ready(function() {
  $(".navbar__hamburger").click(function() {
    $(this).toggleClass("navbar__hamburger--active");
    $(".navbar").toggleClass("navbar--active");
  });
});
