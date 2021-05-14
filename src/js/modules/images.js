const images = () => {
    const workSection = document.querySelector('.about'),
          imgPopup = document.createElement('div'),
          bigImg = document.createElement('img'),
          scroll = calcScroll();
       
          imgPopup.classList.add('faded');
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
              document.body.style.overflow = "hidden";
              document.body.style.marginRight = `${scroll}px`;

          }
          if ( target && target.matches('div.popup')) {
              imgPopup.style.display = "none";
              document.body.style.overflow = "visible";
              document.body.style.marginRight = "0px";
          }
      });

      function calcScroll (){
          let div = document.createElement('div');
          div.style.width = "50px";
          div.style.height = "50px";
          div.style.overflowY = "scroll";
          div.style.visibility = "hidden";

          document.body.appendChild(div);

          let scrollWidth = div.offsetWidth - div.clientWidth;

          return scrollWidth;
      }

   
};

export default images;