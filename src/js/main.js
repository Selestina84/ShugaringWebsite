import hamburger from './modules/hamburger';
import smooth from './modules/smooth';
import images from './modules/images';
import form from './modules/form';
import button from './modules/button';
import { Swiper, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


window.addEventListener('DOMContentLoaded', () => {
 'use strict';

 hamburger('.menu','.hamburger','.menu__close');
 button('.btn-pageup');
 smooth('a[href^="#"]','.menu');
 images(); 
 form('form.contacts__form');
 const swiper = new Swiper('.swiper-container',{
  speed: 600,
  loop: true,
  slidesPerView: 1,

  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
breakpoints: {
 576: {
     slidesPerView: 2,
 },

 }

 });

});