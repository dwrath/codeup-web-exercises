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
    let frame1 = $('.frame-image-1').attr('src')
    let frame2 = $('.frame-image-2').attr('src')
    let frame3 = $('.frame-image-3').attr('src')

    $('.swap-1').on('click', function (){
        let temp = frame1
        $('.frame-image-1').attr('src',frame2)
        $('.frame-image-2').attr('src',temp)
    })
    $('.swap-3').on('click', function (){
        let temp = frame3
        $('.frame-image-3').attr('src', frame2)
        $('.frame-image-2').attr('src', temp)
    })
    $('.swap-2').on('click', function (){
        let temp = frame2
        let random =  Math.floor(Math.random() * 2) +1

        if(random % 2 == 0){

           $('.frame-image-2').attr('src',frame1)
            $('.frame-image-1').attr('src',temp)
        }else{
            frame2 = $('.frame-image-2').attr('src',frame3)
            frame3 = $('.frame-image-3').attr('src',temp)
        }
    })

})