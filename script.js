const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('page-header__menu-on');
});



const buy = document.querySelectorArr('.buy');
buy.forEach(element => {
    element.addEventListener('click', () => {
        haveFun = document.createElement('p');
        haveFun.textContent = 'Have fun!';
        haveFun.classList.add('have-fun');
        concert = element.parentNode;
        concert.insertBefore(haveFun, element);
        element.classList.add('bought');
    });
});
