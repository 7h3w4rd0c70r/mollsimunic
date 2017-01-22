
$(document).ready(function () {
  
  $('img.slider1').css('height', '60px');
  $('img.slider2').css('height', '120px');
  $('img.slider3').css('height', '60px');
  
  $('.slider').on('click', function () {
      var src = $(this).attr('src');
      $('#dimmerImage').attr('src', src);
      $('#dimmer').dimmer('show');
  });
  
  $('.carousel1').on('mouseover', function () {
    $('img.slider1').animate({
        height: '120px'
    }, 750);
    $('img.slider2').animate({
        height: '60px'
    }, 750);
    $('img.slider3').animate({
        height: '60px'
    }, 750);
  });
  
  $('.carousel2').on('mouseover', function () {
    $('img.slider1').animate({
        height: '60px'
    }, 750);
    $('img.slider2').animate({
        height: '120px'
    }, 750);
    $('img.slider3').animate({
        height: '60px'
    }, 750);
  });
  
  $('.carousel3').on('mouseover', function () {
    $('img.slider1').animate({
        height: '60px'
    }, 750);
    $('img.slider2').animate({
        height: '60px'
    }, 750);
    $('img.slider3').animate({
        height: '120px'
    }, 750);
  });
  
  $('.slider1').slick({
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    draggable: true,
    prevArrow: false,
    nextArrow: false
  });
  
  $('.slider2').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    draggable: true,
    prevArrow: false,
    nextArrow: false
  });
  
  $('.slider3').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    draggable: true,
    prevArrow: false,
    nextArrow: false
  });
  
});

