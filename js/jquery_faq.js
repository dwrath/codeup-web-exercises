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
})