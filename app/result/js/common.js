jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu, .overlay").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu, .overlay").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });

  $('.a-after').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('rot180');    
    
    $(this).parent().next('.top-open').slideToggle(); 


  });


  $('.filter-btn-hide').click(function (e) {
    e.preventDefault();
    if ($(this).find('span').text() == 'Свернуть фильтр') {
      $(this).find('span').text('Показать фильтр');
    }
    else {
     $(this).find('span').text('Свернуть фильтр');
   }
   $(this).find('i').toggleClass('rot180');
   
   $('.filter-rows').slideToggle();
 });


  //$("#phone_1").mask("+7 (999) 999-99-99");

//Add Inactive Class To All Accordion Headers
$('.accordion-header').toggleClass('inactive-header');

  //Set The Accordion Content Width
  var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });
  
  //Open The First Accordion Section When Page Loads
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  
  // The Accordion Effect
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
    
    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });


  $('.tabs-control-1 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-1 .tabs_control_item'),
    contentItem = $('.tabs_content-1 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.tabs-control-2 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-2 .tabs_control_item'),
    contentItem = $('.tabs_content-2 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });




  if ($('.sl').length) {
    $('.sl').slick({  
     dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 1     
   }); 
  }

/*
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  variableWidth: true,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  dots: true
  */


//RANGE
const priceSlider = document.querySelector('.price__range');
if (priceSlider) {

  //let textFrom = priceSlider.getAttribute('data-from');
  let textTo = priceSlider.getAttribute('data-to');

  noUiSlider.create(priceSlider, {
    start: [4290, 19990],
    connect: true,
    //tooltips: [wNumb({ decimals: 0, prefix: '' + '' }), wNumb({ decimals: 0, prefix: '' + '' })],
    range: {
      'min': [0],
      'max': [25000]
    }    
  });

  
  const priceStart = document.getElementById('price-start');
  const priceEnd = document.getElementById('price-end');
  priceStart.addEventListener('change', setPriceValues);
  priceEnd.addEventListener('change', setPriceValues);
  



//Значения из ползунков в инпуты
priceSlider.noUiSlider.on('update', function(values, handle) {
  priceStart.value = +Math.round(priceSlider.noUiSlider.get()[0]);
  priceEnd.value = +Math.round(priceSlider.noUiSlider.get()[1]);
});



function setPriceValues() {
  let priceStartValue;
  let priceEndValue;
  if (priceStart.value != '') {
    priceStartValue = priceStart.value;
  }
  if (priceEnd.value != '') {
    priceEndValue = priceEnd.value;
  }
  priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);


  } //spV
}// if priceSlider


  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');
  });


  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });



  //$('select').fancySelect();

}); //ready

