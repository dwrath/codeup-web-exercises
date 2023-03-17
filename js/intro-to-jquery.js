$(document).ready(function (){
    // $(function() {
//     alert( 'The DOM has finished loading!' );
// });
// let listItem = $('#item-2').html();
// alert(listItem);

    //
    // $('li').css('font-size', '20px');
    // $('li').css('background-color', 'yellow');
    // $('h1').css('background-color', 'yellow');
    // $('p').css('background-color', 'yellow');
    //
    // let h1 = $('h1').html()
    // alert(h1)
    // $('li, h1, p').css('background-color', 'yellow');

    $('h1').click( function (){
        $(this).css('background-color', 'yellow')
    })
    $('p').dblclick( function (){
        $(this).css('font-size', '18px')
    })
    $('h1').hover( function (){
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        })
})

