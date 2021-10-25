const black = document.querySelector('#black');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');

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

const pixel = document.querySelectorAll('.pixel');
for (let index3 = 0; index3 < pixel.length; index3 += 1){
  let colorido = pixel[index3];
  colorido.addEventListener('click', function(){
    if (black.className === 'color selected'){
      colorido.style.backgroundColor = 'black';
    } else if (red.className === 'color selected'){
      colorido.style.backgroundColor = 'red';
    } else if (blue.className === 'color selected'){
      colorido.style.backgroundColor = 'blue';
    } else {
      colorido.style.backgroundColor = 'green';
    }

  });
};
