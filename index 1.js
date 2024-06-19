document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');

    setTimeout(() => {
        title.classList.add('show');
    }, 1000); 

    setTimeout(() => {
        title.classList.add('change-color');
    }, 2500); 
});

