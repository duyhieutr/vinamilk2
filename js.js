
// menu doc 
window.addEventListener('scroll', function () {
  var menu = document.querySelector('.menu');
  if (window.scrollY > 0) {
      menu.classList.add('scrolled');
  } else {
      menu.classList.remove('scrolled');
  }

  if (window.scrollY > 1350) {
      menu.classList.add('scrolled1');
  } else {
      menu.classList.remove('scrolled1');
}
});
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1 ;
next.onclick = function(){
  if(active + 1 > lengthItems){
    active = 0;
  }else{
    active = active + 1;
  }
  reloadSlider();
}
prev.onclick = function(){
  if(active - 1 < 0){
    active = lengthItems;
  }else{
    active = active - 1;
  }
  reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 4000);
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';
  let lastActiveDot = document.querySelector('.slider .dots li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {next.click()}, 4000);
  
}
dots.forEach((li,key) => {
  li.addEventListener('click', function(){
    active = key;
    reloadSlider();
  })
})


const icon_menu = document.querySelector('.menu11');
const menu_an = document.querySelector('.menu_an');
const icon_close = document.querySelector('.icon_close');

icon_close.addEventListener('click', () => {
  menu_an.classList.remove('active');
});

icon_menu.addEventListener('click', () => {
  menu_an.classList.add('active');
});