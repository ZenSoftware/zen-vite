import './style.css';

const helloButton = document.querySelector('#hello') as HTMLButtonElement;

helloButton.addEventListener('click', () => console.log('Hello world'));
