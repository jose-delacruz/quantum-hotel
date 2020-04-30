// Responsive Nav
$(function() {
  menu = $("nav ul");
  title = $( ".slogan" )

  $(".openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
    title.toggle()
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
      title.toggle()
    }
  });
  // $(".open-menu").height($(window).height());
});
