const button = (trigger) => {
 const butt = document.querySelector(trigger);
   butt.classList.add('faded');
   butt.style.display = "none";
  


  window.addEventListener('scroll', () => {

    if(window.pageYOffset >= 600){
     
     butt.style.display = "block";
    }
    else{
     butt.style.display = "none";
    }
   }) 

}
export default button;