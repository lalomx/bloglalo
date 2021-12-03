var slideWrapperEl = document.querySelector('#posts-slide');
var slideItms = document.querySelectorAll('#posts-slide .item');
var navButtons = document.querySelectorAll('button.post__nav__control');
var slideIdx = 0;

var percent = [-25, -50, -75, 0]
slideItms[slideIdx].classList.toggle('active')
navButtons[slideIdx].classList.toggle('post__nav__control-active')
window.setInterval(function () {
  var last = slideIdx
  slideWrapperEl.style.transform = 'translate3d(' + percent[slideIdx] + '%, 0px, 0px)'
  slideIdx++
  if (slideIdx > percent.length - 1) { 
    slideIdx = 0
  }
  navButtons[slideIdx].classList.toggle('post__nav__control-active')
  navButtons[last].classList.toggle('post__nav__control-active')
  slideItms[slideIdx].classList.toggle('active')
  slideItms[last].classList.toggle('active')
}, 6500)

function navClick(el, idx) {
  console.table("click", el, idx)
}