import counts from './modules/counts';
import hamburger from './modules/hamburger';
import smooth from './modules/smooth';
import form from './modules/form';
import button from './modules/button';
import { Swiper, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


window.addEventListener('DOMContentLoaded', () => {
 'use strict';
 counts(6 ,1,'.about--years', '.about', 1500 );
 counts(3500 ,50,'.about--clients', '.about', 1500 );
 counts(25 ,1,'.about--students', '.about', 1500 );
 hamburger('.menu','.hamburger','.menu__close');
 button('.btn-pageup');
 smooth('a[href^="#"]','.menu');
 form('form.contacts__form');
 const swiper = new Swiper('.swiper-container',{
  speed: 600,
  loop: true,
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
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