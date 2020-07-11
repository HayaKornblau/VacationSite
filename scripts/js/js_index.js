// JavaScript source code
'use strict';

// image-slide-show 
$(function () {

    //settings for slider
    var width = 480; // 720
    var animationSpeed = 4000; 
    var pause = 4000; 
    var currentSlide = 1;

    //cache DOM elements
    var $imgSlider = $('#img-slider');
    var $imgSlideContainer = $('.img-slides', $imgSlider);
    var $imgSlides = $('.img-slide', $imgSlider);
    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $imgSlideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
                if (++currentSlide === ($imgSlides.length -2)) {
                    currentSlide = 1;
                    $imgSlideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $imgSlideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider); 

    //start image slider
    startSlider();

});
