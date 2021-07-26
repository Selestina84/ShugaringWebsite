const counts = (n, step, selector, containerSelector, time) => {
 const count = document.querySelector(selector);
 const container = document.querySelector(containerSelector);
 let countStatus = true;

 window.addEventListener('scroll', () => {
  let i = 0;
  let t = Math.round(time/(n/step))
  if (window.pageYOffset >= container.getBoundingClientRect().top && countStatus){

   let countId = setInterval(()=>{
    i = i+step;
     count.innerText = `${i}`;
     if (i == n){
      clearInterval(countId);
      countStatus = false;
     }
     count.innerHTML = i;

   },t)
  }
 })

}
 export default counts;