window.onload = function() {
  let body = document.querySelector("body")
  const button = document.querySelector(".button1")
  button.onclick = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
const button2 = document.querySelector(".button2")
button2.onclick = function() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
const button3 = document.querySelector(".button3")
button3.onclick = function() {
  body.style.fontSize = "larger";
}
const button4 = document.querySelector(".button4")
button4.onclick = function() {
  body.style.fontSize =  "small";

}
}


