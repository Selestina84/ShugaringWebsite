import hamburger from './modules/hamburger';
import smooth from './modules/smooth';
import images from './modules/images';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
 'use strict';

 hamburger('.menu','.hamburger','.menu__close');
 smooth();
 images(); 
 form();
});