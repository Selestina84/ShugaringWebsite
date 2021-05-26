import hamburger from './modules/hamburger';
import smooth from './modules/smooth';
import images from './modules/images';
import form from './modules/form';
import sliders from './modules/slider';
import button from './modules/button';


window.addEventListener('DOMContentLoaded', () => {
 'use strict';

 hamburger('.menu','.hamburger','.menu__close');
 button('.btn-pageup');
 smooth();
 images(); 
 form();
 sliders('.slider__item', '.slider__next', '.slider__prev');

});