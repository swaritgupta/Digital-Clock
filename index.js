var i=0;
var images = ['bgimage.jpg','bgimage1.jpg','bgimage2.jpg','bgimage3.jpg','bgimage4.jpg'];
var slideTime = 4000;
function changeBg(){
  document.body.style.backgroundImage = "url(" + images[i] + ")";
  if (i < images.length - 1) {
      i++;
  } else {
      i = 0;
  }
  setTimeout(changeBg, slideTime);
}
window.onload = changeBg;

function showTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if(h==0){
    h=12;
  }
  if(h>12){
    h=h-12;
    session="PM";
  }
  if(h<10){
    h="0"+h;
  }
  if(m<10){
    m="0"+m;
  }
  if(s<10){
    s="0"+s;
  }
  var time=h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime,1000);


}
showTime();
