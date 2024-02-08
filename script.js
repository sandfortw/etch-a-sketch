let num = 16;

function createRow(num){
  const row = document.createElement('div')
  row.setAttribute('class', 'row')
  for (let i = 0; i < num; i++){
    console.log("hello")
    createSquare(row)
  }
  return row;
}

function createSquare(row){
  const square = document.createElement('div')
  square.setAttribute('class', 'square')
  row.appendChild(square)
}

function createGrid(num){
  const grid = document.querySelector('#grid')
  for (let i = 0; i < num; i++){
    row = createRow(num);
    grid.appendChild(row)
  }
}

// Code to Execute:
createGrid(num)

const button = document.querySelector('#user-prompt-button')

button.addEventListener('click', () => {
  let num = prompt("How wide (and tall) do you want your grid? (Must be less than 100)");
  const grid = document.querySelector('#grid');
  if (isNaN(num)){
    alert('Input is not a number.')
  } else if (parseInt(num) > 100){
    alert('Input is too high.')
  } else{
    grid.innerHTML = '';
    createGrid(num)
  }
})