let intervelId;
function btnClicked() {
  let btn = document.getElementById('btn');
  if (btn.innerText === 'Start') {
    btn.innerText = "Stop";
    btn.classList.remove('start');
    btn.classList.add('stop');
    startCounter();
  } else {
    btn.innerText = "Start";
    btn.classList.remove('stop');
    btn.classList.add('start');
    stopCounter();
  }
}
function startCounter() {
  function count() {
    document.getElementById('counter').innerText++;
  }
  intervelId = setInterval(count, 500);
}

function stopCounter() {
  if (intervelId) {
    clearInterval(intervelId);
  }
}

function resetCounter() {
  document.getElementById('counter').innerText = 0;
}
