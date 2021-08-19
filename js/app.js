/*global $, document*/

$(document).ready(function () {
    "use strict";

    $('.burger').click(function(){
        $('#slide').css({transform: "translateX(0)"})
    });
    $('.close, #system').click(function(){
        $('#slide').css({transform: "translateX(-250px)"});
        $('.liste li').removeClass('limod');
        $('.liste div').removeClass('listemod');
    });

    $('#system').click(function(){
        $('.liste li').removeClass('limod');
        $('.liste div').removeClass('listemod');
    });


    $('.liste li').click(function(){
        $(this).toggleClass('limod');
        $('.liste li').not(this).removeClass('limod');
        if (!$(this).next().hasClass('listemod')){
            $(this).next().addClass('listemod');
            $('.liste li').not(this).next().removeClass('listemod');
        } else {
            $('.liste li').next().removeClass('listemod');
        }
    })

});