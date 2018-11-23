function numberLoop() {

  var num = "";
  var enterNum = document.getElementById("enterNum").value;

  for (i=0; i<=enterNum; i++) {

    num += i + "<br />";
    document.getElementById("output").innerHTML = num;
  }
}
