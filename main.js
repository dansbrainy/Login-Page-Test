$(document).ready(function(){
    $(document).on('click', 'span.login, span.register', function(){
        $( "#login" ).toggleClass("hide");
        $(this).toggleClass( "show" );
    });
 });