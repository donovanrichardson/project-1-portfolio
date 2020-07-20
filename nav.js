let clicked = false;

$('.button').on('click', ()=>{
    $('.fa-bars').css('color', clicked ? '' : 'blue');
    clicked ? $('.collapsible').hide() : $('.collapsible').show()
    clicked = !clicked;
})