const buttons = document.querySelectorAll('.experience__show-btn');
const text = document.querySelectorAll('.experience__text');
const items = document.querySelectorAll('.experience__item');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        text[i].classList.toggle('hide');
        buttons[i].classList.toggle('rotate');
        items[i].classList.toggle('minimize')
    });
}