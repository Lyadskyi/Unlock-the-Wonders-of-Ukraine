$(window).scroll(function () {
  let scrolled = $(window).scrollTop();

  console.log(scrolled);

  if (scrolled > 200) {
    $('#back_to_top').addClass('active');
  } else {
    $('#back_to_top').removeClass('active');
  }
});

$('#back_to_top').click(function () {
  $('body,html').animate({ scrollTop: 0 }, 10);
});

new Swiper('.image-slider', {
  slidesPerView: 3.5,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('mousedown', () => {
    arrow.classList.add('active');
  });

  arrow.addEventListener('mouseup', () => {
    arrow.classList.remove('active');
  });
});
