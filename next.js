let today = new Date();

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let m = today.getMonth();

let date = `${today.getDate()} ${month}, ${today.getFullYear()}`;
console.log(date);

document.getElementById('main-unit').addEventListener('keyup', () => {
  let mainOptions = document.querySelector('.main-unit-options');
  let secondaryOptions = document.querySelector('.second-unit-options');
 
  let mainUnit = mainOptions.options[
    mainOptions.selectedIndex
  ].textContent.toLowerCase();
  let secondUnit = secondaryOptions.options[
    secondaryOptions.selectedIndex
  ].textContent.toLowerCase();

  let numberTyped = parseInt(document.getElementById('main-unit').value); 
  console.log(numberTyped);

  if (mainUnit === 'celsius') {
    if (secondUnit === 'kelvin') {
      document.getElementById('second-unit').value = numberTyped + 273.15;
    } else if (secondUnit === 'fahrenheit') {
      document.getElementById('second-unit').value = (numberTyped * 9) / 5 + 32;
    } else {
      document.getElementById('second-unit').value = numberTyped;
    }
  } else if (mainUnit === 'kelvin') {
    if (secondUnit === 'celsius') {
      document.getElementById('second-unit').value = numberTyped - 273.15;
    } else if (mainUnit === 'fahrenheit') {
      document.getElementById('second-unit').value =
        ((numberTyped - 273.15) * 9) / 5 + 32;
    } else {
      document.getElementById('second-unit').value = numberTyped;
    }
  } else if (mainUnit === 'fahrenheit') {
    if (secondUnit === 'celsius') {
      document.getElementById('second-unit').value =
        ((numberTyped - 32) * 5) / 9;
    } else if (secondUnit === 'kelvin') {
      document.getElementById('second-unit').value =
        ((numberTyped - 32) * 5) / 9 + 273.15;
    } else {
      document.getElementById('second-unit').value = numberTyped;
    }
  }

  
  document.querySelectorAll('.reset').forEach((select) => {
    select.addEventListener('change', () => {
      document.getElementById('main-unit').value = '';
      document.getElementById('second-unit').value = '';
    });
  });
});