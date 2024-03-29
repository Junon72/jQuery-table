$(document).ready(function()    {

    // jQuery Introduction - writing and manipulating a table using jQuery - Challenge

    //Testing lines - Not relevant for the challenge
    //$('h2').addClass('.underline'); //underline all the <h2> elements - with class .underline
   //$('ul').addClass('.border');

   //Challenge solution - Added new classes to js, to change the styling by addressin class instead of css, for not to make permanent changes
   $('tr:odd').addClass('oddRow');
   $('tr:even').addClass('evenRow');

   // Traversing the DOM Tree - Traversing sideways - Other methods - Challenge - 2
    $('.rowTitle').click(function() {
        $('tr').children().removeClass('highlight');
        $(this).siblings().addClass('highlight');
        });
    
    // Additional own things
    $('#colTitle1').click(function() {
        $('td').removeClass('highlight');
        $('.colOne').addClass('highlight');
        
    });

    $('#colTitle2').click(function() {
        $('td').removeClass('highlight');
        $('.colTwo').addClass('highlight');
        
    });

    $('#colTitle3').click(function() {
        $('td').removeClass('highlight');
        $('.colThree').addClass('highlight');
        
    });

    $('#colTitle4').click(function() {
        $('td').removeClass('highlight');
        $('.colFour').addClass('highlight');
        
    });

    $('#colTitle5').click(function() {
        $('td').removeClass('highlight');
        $('.colFive').addClass('highlight');
        
    });

    $('#reset').click(function() {
        $('td').removeClass('highlight');
    });

});


