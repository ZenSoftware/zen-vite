import './style.css';
import { interval, Subscription } from 'rxjs';

let sub: Subscription | undefined;
const output = document.querySelector<HTMLPreElement>('#output')!;

const startButton = document.querySelector<HTMLButtonElement>('#start-button')!;
startButton.addEventListener('click', () => {
  if (!sub) {
    sub = interval(1000).subscribe(i => {
      output.innerHTML = output.innerHTML + i + '\n';
      output.scrollTop = output.scrollHeight;
    });
  }
});

const stopButton = document.querySelector<HTMLButtonElement>('#stop-button')!;
stopButton.addEventListener('click', () => {
  if (sub) {
    sub.unsubscribe();
    sub = undefined;
  }
});

const clearButton = document.querySelector<HTMLButtonElement>('#clear-button')!;
clearButton.addEventListener('click', () => {
  output.innerHTML = '';
});
