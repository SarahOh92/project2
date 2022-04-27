$(document).ready(function () {
    $(".slide").slick({
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  const btt = $('#back-to-top');
  $(window).scroll(function(){
      if($(window).scrollTop() > 200){
          btt.addClass('visible');
      }else{
          btt.removeClass('visible');
      }
  })
  btt.click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},2000)
  })
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });