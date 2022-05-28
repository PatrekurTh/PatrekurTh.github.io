
var canvas = document.getElementById("myCanvas");
var rect = canvas.getBoundingClientRect();
var ctx = canvas.getContext("2d");
var img = document.getElementById("Map");
var X;
var Y;
var yC = document.getElementById('y-c');
var xC = document.getElementById('x-c');


canvas.onmousemove = (e) => {
    X = ((e.clientX - rect.left)* 3) - 2700
    Y = (((e.clientY - rect.top) * 3) + 450)
    var origY = ((e.clientY - rect.top) * 3);
    Y = Y - origY * 2
}

canvas.onclick = (e) => {
    yC.innerText = Y;
    xC.innerText = X;

    ctx.clearRect(0, 0, canvas.width , canvas.height);
    ctx.drawImage(img, 0, 0, 900, 900);
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 5, 0, 2 * Math.PI);
    ctx.fill();
}

canvas.onwheel = (e) => {
    ctx.scale(2, 2)
    ctx.drawImage(img, 0, 0, 900, 900);
    // console.log(e);
}
