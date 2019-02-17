// add form variable
var form = document.getElementById('form');
var todoItems = [];
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
  }
  
  return inputValue + ' ' + textareaValue;
}

form.addEventListener('submit', getValues);

