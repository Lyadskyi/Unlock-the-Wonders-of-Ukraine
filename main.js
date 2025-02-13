$(window).scroll(function () {
  let scrolled = $(window).scrollTop();

  console.log(scrolled);

  if (scrolled > 400) {
    $("#back_to_top").addClass("active");
  } else {
    $("#back_to_top").removeClass("active");
  }
});

$("#back_to_top").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 10);
});
