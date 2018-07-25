/*global $,console*/



$(function () {
   
    'use strict';
    
    var r = 0,
        
        l = 0;
    
    if (l === r) {
        $('.left').hide();
    }
    
    $('.left').click(function () {
       
        l = l + 1;
        
        if (l === 2) {
            $('.disableImages li:nth-of-type(2)').addClass('enableImg');
            $('.disableImages li:nth-of-type(2)').removeClass('disableImg');
            $('.disableImages li:nth-of-type(2)').insertBefore('.enableImages li:first-of-type');
        } else if (l === 3) {
            $('.disableImages li:first-of-type').addClass('enableImg');
            $('.disableImages li:first-of-type').removeClass('disableImg');
            $('.disableImages li:first-of-type').insertBefore('.enableImages li:first-of-type');
        } else {
            $('.disableImages li:last-of-type').addClass('enableImg');
            $('.disableImages li:last-of-type').removeClass('disableImg');
            $('.disableImages li:last-of-type').insertBefore('.enableImages li:first-of-type');
        }
    
        console.log('l =' + l);
        
        $('.enableImages li:last-of-type').removeClass('enableImg');
        $('.enableImages li:last-of-type').addClass('disableImg');
        $('.enableImages li:last-of-type').appendTo('.disableImages');
        
        if ((r === 3) && (l > 0)) {
            $('.right').show();
        }
        
        if (r === l) {
            $('.left').hide();
        }
        
    });
    
    $('.right').click(function () {
       
        $('.enableImages li:first-of-type').removeClass('enableImg');
        $('.enableImages li:first-of-type').addClass('disableImg');
        $('.enableImages li:first-of-type').appendTo('.disableImages');
        $('.disableImages li:first-of-type').addClass('enableImg');
        $('.disableImages li:first-of-type').removeClass('disableImg');
        $('.disableImages li:first-of-type').appendTo('.enableImages');
        
        r = r + 1;
        
        $('.left').show();
        
        console.log(r);
        
        if (r === 3) {
            $('.right').hide();
        }
        
    });
    
    $('.menuSlider ul li:first-of-type').click(function () {
       
        $('.informations h3').html('Title image #01');
        
    });
    
    $('.menuSlider ul li:nth-child(2)').click(function () {
       
        $('.informations h3').html('Title image #02');
        
    });
    
});