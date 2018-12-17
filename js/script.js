$(document).ready(function() {
  $(".navbar__hamburger").click(function() {
    $(this).toggleClass("navbar__hamburger--active");
    $(".navbar").toggleClass("navbar--active");
  });

  $('.smooth-goto').on('click', function() {  
    console.log('yeeet')
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
    return false;
});
});
