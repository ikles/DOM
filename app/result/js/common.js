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



  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/





$(".top-mnu").click(function (e) {
  e.stopPropagation();
});

$('.a-after').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('rot180');    
  
  $(this).parent().next('.top-open').slideToggle(); 
});

let fav_count = 0;

/*
$('.heart-label').click(function () {
  if ( $(this).find('.heart-check').prop("checked")) {
    console.log(fav_count++)
  }
  
});*/


/*
function handleFormChange() {

  const isCheckboxChecked = $('.popular-row input[type="checkbox"]').prop('checked');
  
  if (isCheckboxChecked) {
    fav_count--;
    console.log(fav_count)
  } else {
    fav_count++;
    console.log(fav_count)
  }
  
  
}*/





let i = 0;
$('.teaser-it').each(function () {
  let heart_check = $(this).find('.heart-check');
  i++;
  heart_check.attr("name", "heart-check-"+i);  
});

/*$('.heart-label').click(function () {
  let chBox = $(this).find('.heart-check');
  if ( chBox.prop('checked') ) {
    fav_count++;
    console.log(true);
    console.log(fav_count++);
  }
  else {
    fav_count--;
    console.log(false);
    console.log(fav_count--);
  }
});*/

/*$(document).on('change', '.popular-row', function () {
  $('.popular-row input[type="checkbox"]')
    if ( $(this).prop('checked') ) {
      ++fav_count;
      console.log(fav_count);
    }
    else {
      --fav_count;
      console.log(fav_count);
    }
  
  
  });*/


/*.show {}
.hide {}
.top-action-fav-count {}
.top-action-heart-gray {}
.top-action-heart-red {}*/


$('.filter-open').click(function (e) {
  e.preventDefault();
  $('.catalog-col-filter, .overlay').show();
});

$('.left-filter-close').click(function () {
  $('.catalog-col-filter, .overlay').hide();
});

$('.overlay').click(function () {
  $('.catalog-col-filter, .overlay, .popup').hide();
})


$('.filter-btn-hide').click(function (e) {
  e.preventDefault();
  if ($(this).find('span').text() == 'Свернуть фильтр') {
    $(this).find('span').text('Еще фильтры');
  }
  else {
   $(this).find('span').text('Свернуть фильтр');
 }
 $(this).find('i').toggleClass('rot180');
 
 $('.filter-rows').toggleClass('open');
});









$( '#example4' ).sliderPro({
  width: 880,
  height: 520,
  fade: true,
  arrows: true,
  buttons: false,
  fullScreen: false,
  shuffle: false,
  smallSize: 500,
  mediumSize: 1000,
  largeSize: 3000,
  loop: true,
  thumbnailArrows: true,
  autoplay: false,
  responsive: true,
  startSlide: 0,
  
});








//$(".sp-thumbnails-container").wrap("<div class='sp-thumbnails-w'></div>");






  //$("#phone_1").mask("+7 (999) 999-99-99");

//Add Inactive Class To All Accordion Headers
//$('.accordion-header').toggleClass('inactive-header');

  //Set The Accordion Content Width
  /*var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });*/
  
  //Open The First Accordion Section When Page Loads
  /*$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');*/
  
  // The Accordion Effect
  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).next().slideToggle().toggleClass('open-content');
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

  

  


/*  var $div = $('<div/>').css({
    position: 'absolute',
    background: 'white',
    border: '1px solid black',
    padding: '10px',
    zIndex: 999,
    display: 'none'
  }).appendTo('body');

  $('.found-image-quest')
  .mousemove(function(e){
    $div.css({
      top: e.pageY + 10 + 'px',
      left: e.pageX + 10 + 'px'
    });
  })
  .hover(function(){
    $div.show().html('Text to display...');
  }, function(){
    $div.hide();
  });*/





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


  $('.accordion-content-btn-w-1-js .accordion-content-btn').click(function (e) {
    e.preventDefault();
    var item = $(this).closest('.accordion-content-btn-w-1-js .accordion-control-item'),
    contentItem = $('.accordion-content-content-1-js .accordion-content-item'),
    itemPosition = item.index();
    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');
  });

  $('.accordion-content-btn-w-2-js .accordion-content-btn').click(function (e) {
    e.preventDefault();
    var item = $(this).closest('.accordion-content-btn-w-2-js .accordion-control-item'),
    contentItem = $('.accordion-content-content-2-js .accordion-content-item'),
    itemPosition = item.index();
    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');
  });

  $('.accordion-content-btn-w-3-js .accordion-content-btn').click(function (e) {
    e.preventDefault();
    var item = $(this).closest('.accordion-content-btn-w-3-js .accordion-control-item'),
    contentItem = $('.accordion-content-content-3-js .accordion-content-item'),
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
     speed: 1900,
     cssEase: 'ease-in-out',
     fade: true,
     slidesToShow: 1     
   }); 
  }


  if ($('.projgal-slider').length) {
    $('.projgal-slider').slick({  
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1     
   }); 
  }


  if ($('.built-row').length) {
    $('.built-row').slick({  
     dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 4,
     responsive: [

     {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    },
    ]     
  }); 
  }

  $('.filter-label-more').click(function () {
    $('.filter-label-more ~ .filter-2-label').show();
    $(this).remove();
  });


  $('.price-sort').click(function (e) {
    e.preventDefault();
    $(this).find('i').toggleClass('rot')
  })

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


/*const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

  let textFrom = priceSlider.getAttribute('data-from');
  let textTo = priceSlider.getAttribute('data-to');

  noUiSlider.create(priceSlider, {
    start: [0, 200000],
    connect: true,
    tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
    range: {
      'min': [0],
      'max': [200000]
    }
  });*/



//RANGE
const priceSlider = document.querySelector('.price__range--1');
if (priceSlider) {

  let textFrom = priceSlider.getAttribute('data-from');
  let textTo = priceSlider.getAttribute('data-to');

  noUiSlider.create(priceSlider, {
    start: [10, 250],    
    connect: true,
    step: 0.1,
    tooltips: [wNumb({ decimals: 2, prefix: '' + '' }), wNumb({ decimals: 2, prefix: '' + '' })],
    
    range: {
      'min': [10],
      'max': [500]
    },
    format: wNumb({
        decimals: 3,
        thousand: '.',
        suffix: ' (US $)'
    })
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




const priceSlider2 = document.querySelector('.price__range--2');
if (priceSlider2) {

  //let textFrom = priceSlider.getAttribute('data-from');
  let textTo = priceSlider2.getAttribute('data-to');

  noUiSlider.create(priceSlider2, {
    start: [2000000, 10000000],
    connect: true,
    //tooltips: [wNumb({ decimals: 0, prefix: '' + '' }), wNumb({ decimals: 0, prefix: '' + '' })],
    range: {
      'min': [1800000],
      'max': [22800000]
    }    
  });

  
  const priceStart2 = document.getElementById('price-start2');
  const priceEnd2 = document.getElementById('price-end2');
  priceStart2.addEventListener('change', setPriceValues);
  priceEnd2.addEventListener('change', setPriceValues);
  



//Значения из ползунков в инпуты
priceSlider2.noUiSlider.on('update', function(values, handle) {
  priceStart2.value = +Math.round(priceSlider2.noUiSlider.get()[0]);
  priceEnd2.value = +Math.round(priceSlider2.noUiSlider.get()[1]);
});



function setPriceValues() {
  let priceStartValue2;
  let priceEndValue2;
  if (priceStart2.value != '') {
    priceStartValue2 = priceStart2.value;
  }
  if (priceEnd2.value != '') {
    priceEndValue2 = priceEnd2.value;
  }
  priceSlider2.noUiSlider.set([priceStartValue2, priceEndValue2]);


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

