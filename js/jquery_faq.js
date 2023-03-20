$(document).ready(function() {
    $('dt').hover(function() {
            $(this).css('cursor', 'pointer');
        }
    );

    $('dt').click(function (event) {
        event.preventDefault();
        $(this).next().fadeToggle();

        $(this).toggleClass('active');
    });
    $('.last-li').on('click', function (){
        $('.park-facts').each(function (index){
            $(this).children().last().css('background-color', 'yellow')
        })
    })
    $('h3').on('click', function (){
        $(this).next().children().css('font-weight', 'bold');
    })
    $('h3').hover(function (){
        $(this).css('cursor', 'pointer');
    })
    $('li').hover(function (){
        $(this).css('cursor', 'pointer');
    })
    $('li').on('click', function (){
        $(this).parent().children().first().css('background-color', 'blue')
    })

})