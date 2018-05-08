
// Get a random number
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var circle= document.getElementById('circle');
var rect= document.getElementById('rect');
var ellipse=document.getElementById('ellipse');


// Change the shapes to a random color
function changeColor(){
		circle.style.fill = getRandomColor();
		rect.style.fill = getRandomColor();
		ellipse.style.fill = getRandomColor();
}
