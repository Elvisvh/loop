const activemenu = () => {
    const hamButtom = document.querySelector('.ham__menu');
    const closebuttom = document.querySelector('.close__menu__x');
    const navButtom = document.querySelector('.__nav__');

    //abrir menu
    hamButtom.addEventListener('click', () => {
        console.log('hola mundo');
        hamButtom.classList.toggle('ham__menu__x');
        closebuttom.classList.toggle('ham__close');
        navButtom.classList.toggle('nav__active');
    })

    closebuttom.addEventListener('click', () => {
        hamButtom.classList.toggle('ham__menu__x');
        closebuttom.classList.toggle('ham__close');
        navButtom.classList.toggle('nav__active');
    });
}

activemenu();