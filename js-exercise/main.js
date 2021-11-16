
function myFunction() {
  console.log ("button click")
  var element = document.getElementById("cat-full");
  element.classList.remove("hidden");

  var meow = document.getElementById("cat-hungry");
  meow.classList.add("hidden");
}


