$(document).ready(function(){
    let $portfolio__item_hovered = $(
        "<img src='img/portfolio/black-hover.png' class='portfolio__item_hovered' alt='hovered'></img>" +
        "<img src='img/portfolio/plus.png' class='portfolio__item_plus-hovered' alt='hovered-plus'></img>"
    );
    $('.portfolio__item').hover(function() {
        $(this).children('.portfolio__item-description').toggleClass('portfolio__item-description_visible');
    });
    $('.portfolio__item').on('mouseenter', function() {
        $(this).append($portfolio__item_hovered);
    });
    $('.portfolio__item').on('mouseleave', function() {
        $($portfolio__item_hovered).remove();
    });
    $('.our-team__cards').children('.red-border').on('mouseenter', ()=>{
        if (!($('.members-description__decription-card_red').hasClass('active-card'))) {
            $('.members-description__decription-card_red').siblings().fadeOut('fast', ()=> {
            $('.members-description__decription-card_red').fadeIn('slow');})
        }
    });
    $('.our-team__cards').children('.green-border').on('mouseenter', ()=>{
        if (!($('.members-description__decription-card_green').hasClass('active-card'))) {
            $('.members-description__decription-card_green').siblings().fadeOut('fast', ()=> {
            $('.members-description__decription-card_green').fadeIn('slow');})
            }
    });
    $('.our-team__cards').children('.purple-border').on('mouseenter', ()=>{
        if (!($('.members-description__decription-card_purple').hasClass('active-card'))) {
            $('.members-description__decription-card_purple').siblings().fadeOut('fast', ()=> {
            $('.members-description__decription-card_purple').fadeIn('slow');})
        }
    });
    $('.our-team__cards').children('.orange-border').on('mouseenter', ()=>{
        if (!($('.members-description__decription-card_orange').hasClass('active-card'))) {
            $('.members-description__decription-card_orange').siblings().fadeOut('fast', ()=> {
            $('.members-description__decription-card_orange').fadeIn('slow');})
        }
    });
});