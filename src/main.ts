/**
 * Add Inter fonts
 */

import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const popup = document.querySelector('.popup');
const buttons = document.querySelectorAll('.popup__button');

buttons[0].addEventListener('click', () => {
  window.location.href =
    'https://glimp.de/kategorie/einweg-e-zigaretten/elf-bar/elf-bar-600/?_gl=1*12ijvoi*_ga*mtuyntk2otuyos4xnzi1odyxnde5*_ga_9mfz1tfhsb*mtcyntg2mtqxos4xljaumtcyntg2mtqxos4wljauma..';
});

buttons[1].addEventListener('click', () => {
  popup?.classList.add('close');
  window.location.href =
    'https://glimp.de/kategorie/einweg-e-zigaretten/elf-bar/elf-bar-600/?_gl=1*12ijvoi*_ga*mtuyntk2otuyos4xnzi1odyxnde5*_ga_9mfz1tfhsb*mtcyntg2mtqxos4xljaumtcyntg2mtqxos4wljauma..';
});
