const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let timerId = null;

start.addEventListener('click', onClickStart);
stop.addEventListener('click', onClickStop);

function onClickStart() {
  start.disabled = true;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onClickStop() {
  start.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}