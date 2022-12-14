import './style.css';
import { from, map } from 'rxjs';

const sampleButton = document.querySelector<HTMLButtonElement>('#sample-button')!;
const output = document.querySelector<HTMLDivElement>('#output')!;

sampleButton.addEventListener('click', () => {
  from([1, 2, 3, 4])
    .pipe(map(x => x * 2))
    .subscribe(val => {
      output.innerHTML = output.innerHTML + val + '\n';
    });
});
