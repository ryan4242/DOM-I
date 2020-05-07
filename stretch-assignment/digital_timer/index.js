const clock = document.querySelector('.digits');
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const secondOnes = document.querySelector('#secondOnes');
const secondTens = document.querySelector('#secondTens');



document.querySelector('button').addEventListener('click', start);

function start() {
  const interval = setInterval(counter, 10);

  let ms = 0;
let msh = 1;
let seconds = 1;

function counter() {
  if(ms < 10) {
    msTens.textContent = ms;
  } else if(ms == 10) {
      ms = 0;
      msTens.textContent = ms;      
      if(msh < 10 || msTens.innerHTML == '-') {
        msHundreds.textContent = msh;
        msh++
      } else {
          msh = 0;
          msHundreds.textContent = msh;
          if(seconds < 10 || secondOnes.innerHTML == '-') {
            secondOnes.textContent = seconds;
            seconds++
          } else {
              secondTens.textContent = 1;
              secondOnes.textContent = 0;
              clock.style.color = 'red';
              clearInterval(interval);
          }
      }
  }
  ms++;
}
}


