const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('page-header__menu-on');
});


const buy = document.querySelectorAll('.buy');
buy.forEach(element => {
    element.addEventListener('click', () => {
        let haveFun = document.createElement('p');
        haveFun.textContent = 'Have fun!';
        haveFun.classList.add('have-fun');
        let concert = element.parentNode;
        concert.insertBefore(haveFun, element);
        element.classList.add('bought');
    });
});


const contactButton = document.querySelector('.button--contact');
const contactForm = document.querySelector('.contact__form'); 
contactButton.addEventListener('click', () => {
    let formData = new FormData(contactForm);
    console.log(Object.fromEntries(formData));
})
