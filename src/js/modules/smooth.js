const smooth = (links,selector) => {
 const smoothLinks = document.querySelectorAll(links);
 const menuEl =  document.querySelector(selector);
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        menuEl.classList.remove('active');
    });
};
};

export default smooth;