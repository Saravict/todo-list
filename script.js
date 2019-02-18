// add form variable
var form = document.getElementById('form');
var todoContainer = document.getElementById('todo-container');
var todoItems = [];
var todoCount = 0;
// function to get form values
function getValues(event){
  event.preventDefault();
  // form elements
  var input = document.getElementById('input');
  var textarea = document.getElementById('textarea');
  // form elements values
  var inputValue = input.value;
  var textareaValue = textarea.value;
  if(inputValue != '' && textareaValue != ''){
    todoItems.push([inputValue, textareaValue]);
    form.reset();
    renderAllItems();
  }
}

form.addEventListener('submit', getValues);

function render(title, description, todoCount){
  var newHtml =
  '<div class="list-item">' +
    todoCount + 
    '<div class="list-item-container">' + 
      '<h2 class="list-item-title">' + title + '</h2>' +
      '<p class="list-item-text">' + description + '</p>' +
      '<div class="list-item-close">&times;</div>' +
    '</div>' +
    '↑<br>' +
    '↓' +
  '</div>';
  todoContainer.innerHTML = todoContainer.innerHTML + newHtml;
}

function renderAllItems(){
  todoContainer.innerHTML = '<h1 class="title">LIST</h1>';
  for(var index = 0; index < todoItems.length; index = index + 1){
    var current = todoItems[index];
    render(current[0], current[1], index + 1);
  }
}