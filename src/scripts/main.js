

const menu = document.querySelector('.menu');
const button = document.querySelector('.testButton');

menu?.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!isExpanded));
});

button?.addEventListener('click', () => {
    console.log('Button clicked');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
});

