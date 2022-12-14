import './style.css';
import { fromEvent, switchMap, interval } from 'rxjs';

const output = document.querySelector<HTMLDivElement>('#output')!;
const sampleButton = document.querySelector<HTMLButtonElement>('#sample-button')!;
const clearButton = document.querySelector<HTMLButtonElement>('#clear-button')!;

clearButton.addEventListener('click', () => {
  output.innerHTML = '';
});

fromEvent(sampleButton, 'click')
  .pipe(switchMap(() => interval(1000)))
  .subscribe(i => {
    output.innerHTML = output.innerHTML + i + '\n';
    output.scrollTop = output.scrollHeight;
  });
