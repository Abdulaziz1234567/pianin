$('.header_menu_media_ul').hide();
$('.header_menu_btn').click(function () {

    $('.header_menu_media_ul').slideToggle();
   
})  
// $('.haeder_menu_btn').click(function () {
//     alert('l')
// })



$('.no_ul').hide();
$('.no_ul-1').hide();
$('.no_ul-2').hide();
$('.no_ul-3').hide();

$('.h4').click(function () {
    $('.no_ul').slideToggle();
    $('.az').toggleClass('activeAz');
})
$('.h4-1').click(function () {
    $('.no_ul-1').slideToggle();
    $('.az-1').toggleClass('activeAz');
})
$('.h4-2').click(function () {
    $('.no_ul-2').slideToggle();
    $('.az-2').toggleClass('activeAz');
})
$('.h4-3').click(function () {
    $('.no_ul-3').slideToggle();
    $('.az-3').toggleClass('activeAz');
})
$('.footer__contact_box').hide();
$('.btn_footer').click(function () {
    $('.footer__contact_box').toggle('active_foter');
  
    
})

//
// const swiper = new Swiper('.swiper', {

//     direction: 'vertical',
//     loop: true,
  

//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });




// $('.nu_ul-7').css({
//     transform: 'translateX(-100%)'
// })