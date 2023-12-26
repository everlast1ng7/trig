const xmark = document.querySelectorAll('.main_pg-xmark');
const names = document.querySelectorAll('.main_pg-name');

var acc = document.getElementsByClassName("main_pg-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log(this.getElementsByClassName('main_pg-xmark'));
    const xmarkArray = Array.from(this.getElementsByClassName('main_pg-xmark'));
    console.log(xmarkArray[0]);
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      xmarkArray[0].style.transform = 'rotate(0deg)';
      // xmarkArray[0].classList.add('xmarkDeactive');
    } else {
      xmarkArray[0].style.transform = 'rotate(45deg)';
      panel.style.maxHeight = panel.scrollHeight + "px";
      // xmarkArray[0].classList.add('xmarkActive');
    }
  });
}