const images = () => {
    const workSection = document.querySelector('.about'),
          body = document.querySelector('body'),
          imgPopup = document.createElement('div'),
          bigImg = document.createElement('img');
       

      imgPopup.classList.add('popup');
      imgPopup.style.display = "none";
      workSection.appendChild(imgPopup);  
      
      imgPopup.appendChild(bigImg);
  

      workSection.addEventListener('click', (e) => {
          e.preventDefault();
          let target = e.target;
          if( target && target.classList.contains('about__sert-photo' )){
              imgPopup.style.display = "flex";
              const path = target.parentNode.getAttribute('href');
              bigImg.setAttribute('src', path);
              body.classList.add('modal-open');

          }
          if ( target && target.matches('div.popup')) {
              imgPopup.style.display = "none";
              body.classList.remove('modal-open');
          }
      });

   
};

export default images;