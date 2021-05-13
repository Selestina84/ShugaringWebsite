import hamburger from './modules/hamburger';
import smooth from './modules/smooth';

window.addEventListener('DOMContentLoaded', () => {
 'use strict';

 hamburger('.menu','.hamburger','.menu__close');
 smooth();
});