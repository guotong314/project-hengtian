$(function() {
    $('.toolbar>ul>li').mouseover(function() {
        $(this).children('a').css("color", "#fff");
        $(this).children('a').css("background-color", "#363ab2");
        $(this).children('ul').show();
    })
    $('.toolbar>ul>li').mouseout(function() {
        $(this).children('a').css("color", "#4b4b4b");
        $(this).children('a').css("background-color", "#fff");
        $(this).children('ul').hide();
    })
})