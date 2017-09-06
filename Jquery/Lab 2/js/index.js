$(document).ready(function () {
    function firstVaraiant() {
        var texH1 = $('#main_h1').text('Change by jquery');
        var myLogo = $('.logo');
        myLogo.css("display", "none");
    }
    function secondVariant() {
        var myLogo = $('.logo');
        myLogo.hide(1500);
    }
    function thirdVariant() {
        var myLogo = $('.logo');
        myLogo.css("visibility", "hidden");
    }
    thirdVariant();
})