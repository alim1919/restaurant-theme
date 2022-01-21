$(document).ready(function(){
    $('.header-container li a').click(function(){
        // console.log($(this));
        $('.header-container li a').removeClass('active')
        $(this).addClass('active')

    });
});