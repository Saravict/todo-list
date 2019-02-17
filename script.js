// add form variable
var form = document.getElementById('form');
var todoContainer = document.getElementById('todo-container');
var todoItems = [];
var todoCount = 3;
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
    todoItems.push([inputValue, textareaValue])
    form.reset()
    render(inputValue, textareaValue)
  }
}

form.addEventListener('submit', getValues);

function render(title, description){
  todoCount = todoCount + 1;

  var todoItem = document.createElement('div');
  var number = document.createTextNode('0' + todoCount);
  todoItem.className = 'list-item';
  todoItem.appendChild(number);

  var todoItemContainer = document.createElement('div');
  todoItemContainer.className = 'list-item-container';

  var todoTitle = document.createElement('h2');
  var title = document.createTextNode(title);
  todoTitle.className = 'list-item-title';
  todoTitle.appendChild(title);

  var todoText = document.createElement('p');
  var description = document.createTextNode(description);
  todoText.className = 'list-item-text';
  todoText.appendChild(description);

  var todoClose = document.createElement('div');
  var close = document.createTextNode('×');
  todoClose.className = 'list-item-close';
  todoClose.appendChild(close);

  todoItemContainer.appendChild(todoTitle);
  todoItemContainer.appendChild(todoText);
  todoItemContainer.appendChild(todoClose);

  todoItem.appendChild(todoItemContainer);
  var arrowUp = document.createTextNode('↑\n');
  var arrowDown = document.createTextNode('↓');
  todoItem.appendChild(arrowUp);
  todoItem.appendChild(arrowDown);

  todoContainer.appendChild(todoItem);
}