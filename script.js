// Hover on chocolate box to see the flavours.
$(document).ready(function(){
    $("#top-right").on('mouseenter', function() {
        $("#white").show();
    }).on('mouseout', function() {
        $("#white").hide();
    });

    $("#bottom-left").on('mouseenter', function() {
        $("#milk").show();
    }).on('mouseout', function() {
        $("#milk").hide();
    });

    $("#bottom-right").on('mouseenter', function() {
        $("#truffle").show();
    }).on('mouseout', function() {
        $("#truffle").hide();
    });

    $("#top-left").on('mouseenter', function() {
        $("#truffle2").show();
    }).on('mouseout', function() {
        $("#truffle2").hide();
    });
});
