var size = 200;
var arrColor = new Array(
  'tomato',
  'yellow',
  'lime',
  'orange',
  'lavender',
  'indigo',
  'coral',
  'red',
  'blue',
  'cyan',
  'crimson',
  'darkturquoise',
  'deepskyblue'
);

function init() {
  showTime();
}

function showTime() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var color1 = arrColor[rand(0, 12)];
  var color2 = arrColor[rand(0, 12)];
  var color3 = checkColor(color1, color2);
  var hourDeg = 30 * ((hour % 12));
  var minDeg = 6 * min;
  var secDeg = 6 * sec;

  hour = insert0(hour);
  min = insert0(min);
  sec = insert0(sec);
  size >= 400 ? size = 200 : size;

  document.getElementById('clock').innerHTML =
    '<h1>' +
    hour + ':' +
    min + ':' +
    sec;
  document.getElementById('clock').style.backgroundColor = color1;
  document.getElementById('clock').style.width = size + 'px';
  document.getElementById('clock').style.height = size + 'px';
  document.getElementById('clock').style.borderWidth = min + 'px';
  document.getElementById('hour-pointer').style.webkitTransform = 'rotate(' + hourDeg + 'deg)';
  document.getElementById('min-pointer').style.webkitTransform = 'rotate(' + minDeg + 'deg)';
  document.getElementById('sec-pointer').style.webkitTransform = 'rotate(' + secDeg + 'deg)';
  document.getElementsByTagName('body')[0].style.backgroundColor = color3;
  size += 100;
  setTimeout(showTime, 1000);
}

function checkColor(color1, color2) {
  if (color1 == color2) {
    var color = 'darkviolet';
    return color;
  } else {
    return color2;
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insert0(nr) {
  nr < 10 ? nr = '0' + nr : '';
  return nr;
}