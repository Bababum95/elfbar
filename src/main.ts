/**
 * Add Roboto fonts
 */
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const popup = document.querySelector('.popup');
const buttons = document.querySelectorAll('.popup__button');

buttons[0].addEventListener('click', () => {
  window.location.href = 'https://www.google.com';
});

buttons[1].addEventListener('click', () => {
  popup?.classList.add('close');
});
