var slideWrapperEl = document.querySelector('#posts-slide');
var slideItms = document.querySelectorAll('#posts-slide .item');
var slideIdx = 0;

console.log(slideItms);
var percent = [-25, -50, -75, 0]
slideItms[slideIdx].classList.toggle('active')
window.setInterval(function () {
  var last = slideIdx
  slideWrapperEl.style.transform = 'translate3d(' + percent[slideIdx] + '%, 0px, 0px)'
  slideIdx++
  if (slideIdx > percent.length - 1) { 
    slideIdx = 0
  }
  slideItms[slideIdx].classList.toggle('active')
  slideItms[last].classList.toggle('active')
}, 6500)