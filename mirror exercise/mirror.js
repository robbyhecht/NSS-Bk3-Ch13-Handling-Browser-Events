let article1 = document.getElementById("article1")
let article2 = document.getElementById("article2")
let input1 = document.getElementById("message")

input1.addEventListener("keyup", function() {
  article1.textContent = input1.value;
  article2.textContent = input1.value;
});