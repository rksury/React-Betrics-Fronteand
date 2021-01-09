 //jquery auto height
         jQuery.fn.autoHeight1 = function(options) {
         var defaults = {
          textColor: "#000"        
         };
         var opt = $.extend( {}, defaults, options );
         return this.each(function() {
         var ele = $(this);
          function setHeight(){
          	var windowHeight1 = $(window).height();
           ele.css({"height" : windowHeight1});
          }
         setHeight();
         $(window).resize(function() {
         setHeight();    
         });
         });
         };
         
         $(function() {
         $(".autoHeight").autoHeight1();
         });

           jQuery.fn.autoHeight2 = function(options) {
         var defaults = {
          textColor: "#000"        
         };
         var opt = $.extend( {}, defaults, options );
         return this.each(function() {
         var ele = $(this);
          function setHeight(){
            var windowHeight2 = $(window).height();
           ele.css({"height" : windowHeight2 - 270});
          }
         setHeight();
         $(window).resize(function() {
         setHeight();    
         });
         });
         };
         
         $(function() {
         $(".autoHeight-appo").autoHeight2();
         });

          jQuery.fn.autoHeight = function(options) {
         var defaults = {
          textColor: "#000"        
         };
         var opt = $.extend( {}, defaults, options );
         return this.each(function() {
         var ele = $(this);
          function setHeight(){
            var windowHeight = $(window).height();
           ele.css({"max-height" : windowHeight - 220});
          }
         setHeight();
         $(window).resize(function() {
         setHeight();    
         });
         });
         };
         
         $(function() {
         $(".autoHeight-ins").autoHeight();
         });


         


 var myDates = [];
 for (var j = 0; j <= 11; j++) {
     myDates[j] = [];
 }

$(function() {
    $('#calendar').datepicker();
    initCalendar();
});

$(function() {
    $('#calendar2').datepicker();
    initCalendar();
});

function initCalendar() {
    $('div.ui-widget-header').append('\
        <a class="ui-datepicker-clear-month" title="Clear month">\
            X\
        </a>\
    ');

    var thisMonth = $($($('#calendar tbody tr,#calendar2 tbody tr')[2]).find('td')[0]).attr('data-month');
    var dateDragStart = undefined; // We'll use this variable to identify if the user is mouse button is pressed (if the user is dragging over the calendar)
    var thisDates = [];
    var calendarTds = $('.ui-datepicker-calendar td:not(.ui-datepicker-unselectable)');
    $('#calendar td,#calendar2 td').attr('data-event', '');
    $('#calendar td,#calendar2 td').attr('data-handler', '');
    $('#calendar td a,#calendar2 td a').removeClass('ui-state-active');
    $('#calendar td a.ui-state-highlight,#calendar2 td a.ui-state-highlight').removeClass('ui-state-active').removeClass('ui-state-highlight').removeClass('ui-state-hover');
    $('#calendar td,#calendar2 td').off();
    for (var i = 0; i < myDates[thisMonth].length; i++) { // Repaint
        var a = calendarTds.find('a').filter('a:textEquals(' + myDates[thisMonth][i].getDate() + ')').addClass('ui-state-active');
        thisDates.push(new Date(a.parent().attr('data-year'), thisMonth, a.html()));
    }

    $('#calendar td,#calendar2 td').mousedown(function () {  // Click or start of dragging
        dateDragStart = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
        $(this).find('a').addClass('ui-state-active');
        return false;
    });

    $('#calendar td,#calendar2 td').mouseup(function () {
        thisDates = [];
        $('#calendar td a.ui-state-active,#calendar2 td a.ui-state-active').each(function () { //Save selected dates
            thisDates.push(new Date($(this).parent().attr('data-year'), $(this).parent().attr('data-month'), $(this).html()));
        });
        dateDragStart = undefined;
        return false;
    });
    $(document).mouseup(function () {
        dateDragStart = undefined;
    });

    $('#calendar td,#calendar2 td').mouseenter(function() {  // Drag over day on calendar
        var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
        if (dateDragStart !== undefined && thisDate > dateDragStart) {  // We are dragging forwards
            for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
                calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
            }
            $(this).find('a').addClass('ui-state-active');
        } else if (dateDragStart !== undefined && thisDate < dateDragStart) {  // We are dragging backwards
            for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
                calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
            }
            $(this).find('a').addClass('ui-state-active');
        }
    });

    $('#calendar td,#calendar2 td').mouseleave(function() {
        var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
        if (dateDragStart !== undefined && thisDate > dateDragStart) {
            for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
                if (thisDates.find( item => item.getTime() == d.getTime()) === undefined) {
                    calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
                }
            }
        } else if (dateDragStart !== undefined && thisDate < dateDragStart) {
            for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
                if (thisDates.find( item => item.getTime() == d.getTime()) === undefined) {
                    calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
                }
            }
        }
    });

    $('.ui-datepicker-clear-month').click(function () {
        thisDates = [];
        calendarTds.find('a').removeClass('ui-state-active');
    });

    $('a.ui-datepicker-next, a.ui-datepicker-prev').click(function() {
        myDates[thisMonth] = thisDates;
        initCalendar();
    });
}

$.expr[':'].textEquals = function(el, idx, selector) {
    var regExp = new RegExp('^' + selector[3] + '$');
    return regExp.test($(el).text());
};




$(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

      

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });


/**********************add this js also**************************/
     $('.registration-form .btn-first').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $('.first-step').fadeIn();
        });
    });

    // submit
   

   
});