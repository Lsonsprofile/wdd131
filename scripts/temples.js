const button = document.querySelector('#menu');
const nav = document.querySelector('nav');
const body = document.body;

button.addEventListener('click', (e) => {
    e.stopPropagation();   
    button.classList.toggle('open');
    nav.classList.toggle('show');
});


body.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        button.classList.remove('open');
    }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 550) {
    nav.classList.remove('show');
    button.classList.remove('open');
  }
});

const yearSpan = document.getElementById('currentYear');
const modSpan = document.getElementById('lastModified');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
modSpan.textContent = document.lastModified;

