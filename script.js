
// add form variable
var form = document.getElementById('form');
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

form.addEventListener('submit', getValues);

