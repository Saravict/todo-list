
// add button variable
var addButton = document.getElementById('button');
// function to get form values
function getValues(event){
  event.preventDefault();
  // form elements
  var input = document.getElementById('input');
  var textarea = document.getElementById('textarea');
  // form elements values
  var inputValue = input.value;
  var textareaValue = textarea.value;
  return inputValue + ' ' + textareaValue;
}

addButton.addEventListener('click', getValues)
