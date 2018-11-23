var sfwNouns = ["dog","person","cat","bird"];

var sfwAdjs = ["silly","scary","slow","speedy","quirky"];

var printPhrase = "";

function randStat() {

  var randNum1 = Math.floor(Math.random()*4);
  var randNum2 = Math.floor(Math.random()*4);
  var newPhrase = "What a" + " " + sfwAdjs[randNum1] + " " + sfwNouns[randNum2] + "<br />";
  printPhrase += newPhrase;
  document.getElementById("output").innerHTML = printPhrase;
}
