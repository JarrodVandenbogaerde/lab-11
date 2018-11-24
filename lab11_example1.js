var selectColor = ["red","green","blue","yellow"];

var allColor = [];




function start() {

  var displayColor = selectColor[Math.floor(Math.random() * selectColor.length)];
  document.getElementById("firstColor").innerHTML = displayColor;
  var timer = setTimeout(start(), 6000);

}

function clickColor(newColor) {

  var displayColor = selectColor[Math.floor(Math.random() * selectColor.length)];

  var chosenColor = document.getElementById("firstColor").value;

  if (newColor == chosenColor) {

    allColor.push(newColor);

    document.getElementById("firstColor").innerHTML = displayColor;
    var timer = setTimeout(start(), 6000);
  }

  else {

    var endGame = allColor.toString();
    document.getElementById("firstColor").innerHTML = "Game Over" + " " + endGame;
  }

}
