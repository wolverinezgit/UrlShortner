let btnClear = document.querySelector('button.reset');
let inputs = document.querySelectorAll('input');
 
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});