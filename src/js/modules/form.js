const form = () => {
 const form = document.querySelectorAll('forms'),
      inputs = document.querySelectorAll('input'),
      textarea = document.querySelectorAll('textarea');

      const message ={
       loading: 'Загрузка...',
       success: 'Спасибо! Скоро я свяжусь с вами!',
       failure: 'Что то пошло не так...'
      }
      
      const clearInputs = () =>{
       inputs.forEach(item => {
        item.value = '';
       });
       textarea.value = '';
      }

      const postData = async (url, data) => {
       document.querySelector('.status').textContent = message.loading;
       let res = await fetch(url, {
        method: "POST",
        body: data,
       });

       return await res.text();
      }

      form.forEach(item => {
       item.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status')
        item.appendChild(statusMessage);

        const formData = new FormData(item);
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
      })
}
 
export default form;