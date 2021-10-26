const black = document.querySelector('#black');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
// const green = document.querySelector('#green');
const pixel = document.querySelectorAll('.pixel');

const colorSelected = document.querySelectorAll('.color');
for (const index of colorSelected) {
  index.addEventListener('click', function () {
    const array = index.parentElement.children;
    for (const index2 of array) {
      index2.className = 'color';
    }
    index.className = 'color selected';
  });
}

for (let index3 = 0; index3 < pixel.length; index3 += 1) {
  const colourful = pixel[index3];
  colourful.addEventListener('click', function () {
    if (black.className === 'color selected') {
      colourful.style.backgroundColor = 'black';
    } else if (red.className === 'color selected') {
      colourful.style.backgroundColor = 'red';
    } else if (blue.className === 'color selected') {
      colourful.style.backgroundColor = 'blue';
    } else {
      colourful.style.backgroundColor = 'green';
    }
  });
}

const button = document.getElementById('clear-board');
button.addEventListener('click', function () {
  for (let index4 = 0; index4 < pixel.length; index4 += 1) {
    const colorArray = pixel[index4];
    colorArray.style.backgroundColor = 'white';
  }
});
