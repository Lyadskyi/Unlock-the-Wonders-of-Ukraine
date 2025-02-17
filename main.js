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
  autoHeight: true, // Автовисота
  centeredSlides: false, // Активний слайд по центру
  grabCursor: true, // Долонька - курсор перетягування
  loop: false, // Нескінченний слайдер
  simulateTouch: true, // false - вимикає свайп
  slidesPerView: 3.5, // Кількість слайдів для показу
  spaceBetween: 16, // Відступ між слайдами
  touchRatio: 1, // Швидкість свайпу: 1- за замовчуванням, 0 - вимикає свайп
  slideToClickedSlide: true, // Перемикання при натисканні на слайд
  keyboard: {
    enabled: true, // Керування клавіатурою: увімкнути/вимкнути
    onlyInViewport: true, // Тільки, коли слайдер в межах в'юпорту
    pageUpDown: true, // Керування клавішами: PgUp, PgDn
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Клікабельність булетів
    dynamicBullets: true, // Динамічність булетів
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
