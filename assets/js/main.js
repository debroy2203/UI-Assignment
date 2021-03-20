/* 
    Assignement - Landing Page of Bone Marrow Transplant
    Date Created - 19/03/2021
    Developed by - Debdatta Roy
*/
//slick js
window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:2500,
    dots:false,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:2,
    slidesToScroll:1
    });
};

//scroll up
$('.scroll-up').click(function(){
    $(window).scrollTop(0);
})