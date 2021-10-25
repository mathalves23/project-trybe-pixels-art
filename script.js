// const black = document.querySelector('#black');
// function selected() { 
//   console.log('teste');
//   black.className = 'selected';
// }
// window.onload = selected;

const black = document.querySelector('#black');
black.addEventListener('click', function(){
  black.className = 'selected';
})