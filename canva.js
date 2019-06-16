var d = document.getElementById("dibujo");
d.style.display = "none";

var wval = parseInt(screen.width);
var hval = parseInt(screen.height);

wval = wval*2;
hval = hval*2;

d.width = wval.toString();
d.height = hval.toString();

var dibujo = d.getContext("2d");
var line = 50;
var l = 0;
var xf, yi;
var c = 0;
var n = 50;
var cx, xy;
var dibujo_width = parseInt(d.width);
var dibujo_height = parseInt(d.height);

var posicionx = [];
var posiciony = [];

for(dx=0;dx<dibujo_width;dx++) {
    posicionx.push(dx);
}
for(dy=0;dy<dibujo_height;dy++) {
    posiciony.push(dy);
}

var diferencia_del_circulo = [];

for(dc=0.1; dc < 1; dc = dc + 0.1) {
    diferencia_del_circulo.push(dc);
}

var xcos = [];

for(dc=0; dc < dibujo_width*2/5; dc = dc + 1) {
    xcos.push(dc);
}

var xsin = [];

for(dc=0; dc < dibujo_height*2/5; dc = dc + 1) {
    xsin.push(dc);
}

var tamano = [];

for(t=10; t < 200; t = t + 1) {
    tamano.push(t);
}

var da_pi = [1, 2, 3, 4, 5];
var times=[1, 2, 3, 4];
var lineTimes = [];

for(lt=20;lt<50;lt++) {
    lineTimes.push(lt);
}

var linesTimesx = [];

for (ltx=0;ltx<=50;ltx++) {
    linesTimesx.push(ltx);
}

var linesTimesy = [];

for (lty=0;lty<=50;lty++) {
    linesTimesy.push(lty);
}

var pis = [1,2];

var diferencia_del_circulo_ran, posicionx_ran, posiciony_ran, xcos_ran, xsin_ran, tamano_ran, da_pi_ran, times_ran, lineTimes_ran, linesTimesx_ran, linesTimesy_ran, screen_color_ran, backgroundColorBlack_ran, backgroundColorWhite_ran;

function getRandomNumber() {
    diferencia_del_circulo_ran = diferencia_del_circulo[Math.floor(Math.random()*diferencia_del_circulo.length)];
    posicionx_ran = posicionx[Math.floor(Math.random()*posicionx.length)];
    posiciony_ran = posiciony[Math.floor(Math.random()*posiciony.length)];
    xcos_ran = xcos[Math.floor(Math.random()*xcos.length)];
    xsin_ran = xsin[Math.floor(Math.random()*xsin.length)];
    tamano_ran = tamano[Math.floor(Math.random()*tamano.length)];
    da_pi_ran = da_pi[Math.floor(Math.random()*da_pi.length)];
    lineTimes_ran = lineTimes[Math.floor(Math.random()*lineTimes.length)];
    linesTimesx_ran = linesTimesx[Math.floor(Math.random()*linesTimesx.length)];
    linesTimesy_ran = linesTimesy[Math.floor(Math.random()*linesTimesy.length)];
}

var pis_ran = pis[Math.floor(Math.random()*pis.length)];
function draw_the_circle (centrox, centroy, size) {
    dibujo.beginPath();
    dibujo.arc(centrox, centroy, size, 0, Math.PI*2);
    dibujo.stroke();
    dibujo.closePath();
}

function draw_the_line(xinicio, yinicio, xfinal, yfinal) {
    dibujo.beginPath();
    dibujo.moveTo(xinicio, yinicio);
    dibujo.lineTo(xfinal, yfinal);
    dibujo.stroke();
}

var screen_color = [true, false];
var backgroundColorWhite = ["black", "#ff0e62", "#0e6dff"];
var backgroundColorBlack = ["white", "#ffb10e", "#07d63e"];

backgroundColorBlack_ran = backgroundColorBlack[Math.floor(Math.random()*backgroundColorBlack.length)];
backgroundColorWhite_ran = backgroundColorWhite[Math.floor(Math.random()*backgroundColorWhite.length)];
screen_color_ran = screen_color[Math.floor(Math.random()*screen_color.length)];
if(screen_color_ran == true) {
    d.style.backgroundColor = backgroundColorBlack_ran;
    dibujo.fillStyle = backgroundColorBlack_ran;
    dibujo.strokeStyle = "black";
    dibujo.fillRect(0, 0, d.width, d.height);
    dibujo.fill();
} else {
    d.style.backgroundColor = backgroundColorWhite_ran;
    dibujo.fillStyle = backgroundColorWhite_ran;
    dibujo.strokeStyle = "white";
    dibujo.fillRect(0, 0, d.width, d.height);
    dibujo.fill();

}

times_ran = times[Math.floor(Math.random()*times.length)];
for(repeat=0;repeat<times_ran;repeat++) {
    getRandomNumber();
    for(c=0;c < Math.PI*da_pi_ran - diferencia_del_circulo_ran; c = c + diferencia_del_circulo_ran) {
        cx = posicionx_ran + xcos_ran*Math.cos(c);
        cy = posiciony_ran + xsin_ran*Math.sin(c);
        draw_the_circle(cx, cy, tamano_ran);
    }
}
for(l=0;l < lineTimes_ran; l++) {
    yi = linesTimesy_ran * l;
    xf = linesTimesx_ran * (l+1);
    draw_the_line(posicionx_ran, xf, yi, posiciony_ran)
}

//New one 

function newOne () {
    location.reload();
}

// set canvasImg image src to dataURL
var canvas_URL = d.toDataURL();

console.log(d);

var canvas_as_image = document.createElement("img");
canvas_as_image.src = canvas_URL;

canvas_as_image.style.width = "70%";
canvas_as_image.style.left = "0";
canvas_as_image.style.right = "0";
canvas_as_image.style.marginLeft = "auto";
canvas_as_image.style.marginRight = "auto";
canvas_as_image.style.display = "block";
canvas_as_image.style.boxShadow = "0px 5px 12px rgba(0,0,0,0.3)";

canvas_as_image.id = "mainCanvasPreview";
document.body.appendChild(canvas_as_image);

download_img = function(el) {
    var image = d.toDataURL("image/jpg");
    el.href = image;
  };
