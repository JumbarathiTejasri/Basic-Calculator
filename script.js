
// Selecting display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let input = ''; // Store input string

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'AC') {
      input = '';
      display.innerText = '0';
    } else if (value === '=') {
      try {
        input = eval(input).toString();
        display.innerText = input;
      } catch {
        display.innerText = 'Error';
        input = '';
      }
    } else if (value === 'x²') {
      try {
        input = Math.pow(eval(input), 2).toString();
        display.innerText = input;
      } catch {
        display.innerText = 'Error';
        input = '';
      }
    } else {
      // Prevent multiple operators at start
      if (input === '' && ['+', '*', '/', '%'].includes(value)) return;

      input += value;
      display.innerText = input;
    }
  });
});
