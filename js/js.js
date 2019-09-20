$('.burger').on('click', function(e) {
    e.preventDefault();
    $('.burger').toggleClass('burger_active');
    $('.shop-link').toggleClass('shop-link_active');
    $('.menu-list').toggleClass('menu-list_active');
})

$('.call-btn').on('click', function(e) {
    e.preventDefault();
    $('.call-window-bg').toggleClass('call-window-bg_active');
})
$('.close-btn_call').on('click', function(e) {
    e.preventDefault();
    $('.call-window-bg').toggleClass('call-window-bg_active');
})

$('.shop-link').on('click', function(e) {
    e.preventDefault();
    $('.shop-window-bg').toggleClass('shop-window-bg_active');
})
$('.close-btn_shop').on('click', function(e) {
    e.preventDefault();
    $('.shop-window-bg').toggleClass('shop-window-bg_active');
})

$(document).ready(function(){
    $('.sl').slick({
    autoplay: true,
    autoplaySpeed: 5000, 
    speed: 1000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    customPaging : function(slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        // return '<a>'+(i+1)+'</a>'; // <-- old
        return '<a>'+('0'+(i+1)).slice(-2)+'</a>'; // <-- new
    }
    

    });
  });

$(document).ready(function(){
    $('.sl-text').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        
        infinite: true,
        slidesToShow: 1,

  
});
});

$('.bg-color').bind("mouseover", function(){
    var color  = $(this).data('color');
    $('.menu-list').css("background", color);
    
})  

jQuery('.sl').slick({
    
});
$(document).ready(function(){
    $(".menu-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        $('.menu-list').toggleClass('menu-list_active');
    });
});

