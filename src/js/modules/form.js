const form = (formSelector) => {
 const form = document.querySelector(formSelector),
      inputs = document.querySelectorAll('input'),
      textarea = document.querySelector('textarea');

      const message ={
       loading: 'Загрузка...',
       success: 'Спасибо! Скоро я свяжусь с вами!',
       failure: 'Что то пошло не так...'
   
      }
      
      const clearInputs = () =>{
        textarea.value = '';
       inputs.forEach(item => {
        item.value = '';
       });
       
      }

      const postData = async (url, data) => {
       document.querySelector('.status').textContent = message.loading;
       let res = await fetch(url, {
        method: "POST",
        body: data,
       });

       return await res.text();
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status')
        form.appendChild(statusMessage);

        const formData = new FormData(form);
        postData('server.php', formData)
         .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
         })
         .catch(() => {
          statusMessage.textContent = message.failure;
         })
         .finally(() => {
          clearInputs();
          setTimeout(() => {
           statusMessage.remove();
          }, 5000);
         })
       })
     
}
 
export default form;