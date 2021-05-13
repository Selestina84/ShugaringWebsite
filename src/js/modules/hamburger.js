 const hamburger = (menuSelector, burgerSelector,  closeSelector) =>{
  const menuEl = document.querySelector(menuSelector),
        burgerEl = document.querySelector(burgerSelector),
        closeEl = document.querySelector(closeSelector);

     burgerEl.addEventListener('click', () => {
      menuEl.classList.add('active')
     });
     
     closeEl.addEventListener('click', () => {
      menuEl.classList.remove('active')
     });
 }

 export default hamburger;