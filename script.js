// const black = document.querySelector('#black');
// const red = document.querySelector('#red');
// const blue = document.querySelector('#blue');
// const green = document.querySelector('#green');

const colorSelected = document.querySelectorAll('.color');
for (let index of colorSelected) {
  index.addEventListener('click', function(event) {
    let array = index.parentElement.children;
    for (let index2 of array) {
      index2.className = 'color';
    }
    index.className = 'color selected';
  })
}