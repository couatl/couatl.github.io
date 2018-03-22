/*
* TODO: С якорей на js-scroll. Жмем на кнопку в навбаре, нас самим скроллит.
* */

$('a[href*=#]:not([href=#])').click(function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
    || location.hostname === this.hostname) {

    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 50
      }, 1000);

      return false;
    }
  }
});