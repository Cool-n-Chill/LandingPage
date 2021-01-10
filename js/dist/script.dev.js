"use strict";

$(document).ready(function () {
  var $portfolio__item_hovered = $("<img src='img/portfolio/black-hover.png' class='portfolio__item_hovered' alt='hovered'></img>" + "<img src='img/portfolio/plus.png' class='portfolio__item_plus-hovered' alt='hovered-plus'></img>");
  $('.portfolio__item').hover(function () {
    $(this).children('.portfolio__item-description').toggleClass('portfolio__item-description_visible');
  });
  $('.portfolio__item').on('mouseenter', function () {
    $(this).append($portfolio__item_hovered);
  });
  $('.portfolio__item').on('mouseleave', function () {
    $($portfolio__item_hovered).remove();
  });
});