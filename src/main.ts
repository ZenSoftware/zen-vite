import './style.css';

const helloButton = document.querySelector('#hello') as HTMLButtonElement;

helloButton.addEventListener('click', () => {
  fetch('http://localhost:3400/hello')
    .then(value => value.json())
    .then(body => console.log(body));
});
