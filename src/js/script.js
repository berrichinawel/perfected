// Fabrics

let lether = document.getElementById("lether");
let wool = document.getElementById("wool");
let lyocell = document.getElementById("lyocell");

let lether__text = document.getElementById("lether__text");
let wool__text = document.getElementById("wool__text");
let lyocell__text = document.getElementById("lyocell__text");

lether.addEventListener("click", function() {
  lether__text.className = "is-checked";
  wool__text.className = "fabric__choice";
  lyocell__text.className = "fabric__choice";
});

wool.addEventListener("click", function() {
  lether__text.className = "fabric__choice";
  wool__text.className = "is-checked";
  lyocell__text.className = "fabric__choice";
});

lyocell.addEventListener("click", function() {
  lether__text.className = "fabric__choice";
  wool__text.className = "fabric__choice";
  lyocell__text.className = "is-checked";
});

// Carrousel

let index = 0;
let lis = document.querySelectorAll(".collection__img");
let elNext = document.querySelector(".collection__arrow--right");
let elPrev = document.querySelector(".collection__arrow--left");

let jump = function(to) {
  lis[index].classList.remove("collection__img--visible");
  index = to;
  if (index > 2) index = 0;
  if (index < 0) index = 2;
  lis[index].classList.add("collection__img--visible");
};

elNext.addEventListener("click", function() {
  jump(index + 1);
});
elPrev.addEventListener("click", function() {
  jump(index - 1);
});

//BUTTON ANIMATION

let spanCoords = {};
let buttons = document.querySelectorAll(".cta");
let spans = document.querySelectorAll(".btn__span");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function(e) {
    spanCoords.x = e.clientX - buttons[i].offsetLeft;
    spanCoords.y = e.clientY - buttons[i].offsetTop + window.scrollY;
    spans[i].style.left = spanCoords.x + "px";
    spans[i].style.top = spanCoords.y + "px";
  });
}
