const btnRight = document.querySelector('.arrow-btn.-right');
const btnLeft = document.querySelector('.arrow-btn.-left');
const elements = document.querySelector('.elements');
let pixels = 10;

btnRight.addEventListener('click', function() {
  pixels = pixels + 50;
  elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
  pixels = pixels - 50;
  elements.style = `transform: translateX(${pixels}px)`;
})