(function() {

    'use strict'

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        loop: true,
        paginationClickable: true,
        mode: 'vertical',
        autoplayDisableOnInteraction: false,
        speed: 600,
        //其他设置
    });

    var $search = $(".search-menu > ul > li > a");
    var $inp1 = $(".search-input > input:eq(0)");
    var $inp2 = $(".search-input > input:eq(1)");
    var $i = $(".search-menu > i");
    $search.click(function() {
        var _sinput = $(this).data("sinput");
        var _sbtn = $(this).data("sbtn");
        $inp1.attr("placeholder", _sinput);
        $inp2.attr("value", _sbtn);
        var _w = $(this).innerWidth() / 2;
        $i.css("left", $(this).position().left + _w - 10);
    })

})()

var $screenHeight = $(document).height();
var $popover = $(".popover");
var $popoverEwm = $(".popover-ewm");

function showEwm() {
    var _left = $(document).width() / 2 - $popoverEwm.width() / 2;
    var _top = $(window).height() / 2 - $popoverEwm.height() / 2;
    $popover.css("height", $screenHeight)
        .css("display", "block");
    $popoverEwm.css("display", "block")
        .css("left", _left)
        .css("top", _top);
    $popoverEwm.addClass("animated zoomIn");
};

$(".close").click(function() {
    $popoverEwm.removeClass("animated zoomIn");
    $popoverEwm.addClass("animated bounceOut");
    setTimeout(function(){
        $popoverEwm.removeClass("animated bounceOut");
        $popover.css("display", "none");
        $popoverEwm.css("display", "none");
    },300);
});

$popover.click(function() {
    $popoverEwm.removeClass("animated zoomIn");
    $popoverEwm.addClass("animated bounceOut");
    setTimeout(function(){
        $popoverEwm.removeClass("animated bounceOut");
        $popover.css("display", "none");
        $popoverEwm.css("display", "none");
    },300);
});


$(".ios-ewm").click(function(){
    $(".ewm-demo").attr("src","./images/ewm.png");   
});
$(".android-ewm").click(function(){
    $(".ewm-demo").attr("src","./images/ewm-android.png");   
});
