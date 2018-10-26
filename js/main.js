$(window).scroll(function(){
	var st = $(this).scrollTop();
	$("p, h1, h2, h3").css({
		"transform":"translate(0%, -"+ st /32  + "%"
	})
	});

//#############  paralax bg #############

$(document).ready(function() {
var $background = $('div.background'),
backgroundWidth = $background.width(),
backgroundHeight = $background.height(),
canvasBack = document.getElementById('canvas-back'),
canvasMid = document.getElementById('canvas-mid'),
canvasFront = document.getElementById('canvas-front');
canvasBack.width = backgroundWidth + 100;
canvasMid.width = backgroundWidth + 200;
canvasFront.width = backgroundWidth + 400;
canvasBack.height = backgroundHeight + 100;
canvasMid.height = backgroundHeight + 200;
canvasFront.height = backgroundHeight + 400;
createBackground(canvasBack, 5000, 100, 0.7);
createBackground(canvasMid, 4000, 100, 1.5);
createBackground(canvasFront, 2000, 100, 2);
 
function createBackground(canvas, arcCount, alpha, maxArcSize) {
var context = canvas.getContext('2d'),
sarcX, arcY, arcR, arcS, arcE, r, g, b, a, color;
for (var i = 0; i < arcCount; i++) {
r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
a = Math.round(Math.random() * alpha) / 100;
color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a +
')';
context.fillStyle = color;
arcX = Math.floor(Math.random() * canvas.width);
arcY = Math.floor(Math.random() * canvas.height);
arcR = Math.random() * maxArcSize;
arcS = Math.ceil(Math.random() * 360);
arcE = Math.random() * 2;
context.beginPath();
context.arc(arcX, arcY, arcR, arcS, arcE * Math.PI);
context.fill();
}
}
document.addEventListener('mousemove', handleBackground);
 
function handleBackground(e) {
var mouseX = -(Math.round((e.clientX / backgroundWidth) *
100)),
mouseY = -(Math.round((e.clientY / backgroundHeight) *
100));
positionBackground($('div.canvas.back'), 1, mouseX,
mouseY);
positionBackground($('div.canvas.mid'), 2, mouseX, mouseY);
positionBackground($('div.canvas.front'), 4, mouseX,
mouseY);
}
 
function positionBackground(div, offset, mouseX, mouseY) {
var offsetX = String(mouseX * offset) + 'px',
offsetY = String(mouseY * offset) + 'px';
div.css({
left: offsetX,
top: offsetY
});
}
});


// ############# </ paralax bg #############

$(document).ready(function () {
    $(".wi40 .skills #progress_bar1").circularProgress({
        color: "#ea8110",
        line_width: 10,
        height: "100px",
        width: "100px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 40, 3000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});






$(document).ready(function () {
    $(".wi40 .skills #progress_bar2").circularProgress({
        color: "#25ffe4",
        line_width: 10,
        height: "100px",
        width: "100px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 20
    }).circularProgress('animate', 78, 2000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});





$(document).ready(function () {
    $(".wi40 .skills #progress_bar3").circularProgress({
        color: "#25ffe4",
        line_width: 10,
        height: "100px",
        width: "100px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 0
    }).circularProgress('animate', 23, 4000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});