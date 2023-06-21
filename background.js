const background = document.querySelector('body');

background. addEventListener ( "mouseover", function (e) {
  x = e.offsetX;
  y = e.offsetY;
  background.style.backgroundColor = `rgb(${x}, ${y}, ${x-y})`;
});
