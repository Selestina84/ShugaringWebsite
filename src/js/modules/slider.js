const sliders = (sliders, prev, next) => {
 const items = document.querySelectorAll(sliders);
 let slideIndex = 1;

 function showSlides(n){
  if(n>items.length){
   slideIndex = 1;
  }
  if(n<1){
   slideIndex = items.length;
  }
  items.forEach(item => {
   item.style.display = "none";
  });
  items[slideIndex-1].style.display = "flex";

 }

 showSlides(slideIndex);

 function plusSlides(n){
  showSlides(slideIndex +=n);
 }

 const prevBtn = document.querySelector(prev),
       nextBtn = document.querySelector(next);

  nextBtn.addEventListener('click',() =>{
   plusSlides(1);
   items[slideIndex - 1].classList.add('slideLeft');
   items[slideIndex - 1].classList.remove('slideRight');
  }) 
  
  prevBtn.addEventListener('click', () => {
   plusSlides(-1);
   items[slideIndex - 1].classList.add('slideRight');
   items[slideIndex - 1].classList.remove('slideLeft');
  })
}

export default sliders;