const timeButtons = document.querySelectorAll(".timer__button");
const timeInput = document.querySelector("#custom");
const displayTimeLeft = document.querySelector(".display__time-left");
const displayEndTime = document.querySelector(".display__end-time");
let countdown;

function startTimer(time) {
  let timeLeft = +time;
  clearInterval(countdown);

  countdown = setInterval(() => {
    if (timeLeft < 0) {
      clearInterval(countdown);
      return;
    }
    let x = timeConvert(timeLeft);
    displayTimeLeft.innerHTML = x;
    document.querySelector("title").innerHTML = x;
    timeLeft--;
  }, 1000);
  displayEndTime.innerHTML = beBackAt(time);
}

function timeConvert(time) {
  const minutes = Math.floor(time / 60);
  const seconds = ("0" + (time % 60)).slice(-2);
  return `${minutes}:${seconds}`;
}

function beBackAt(time) {
  const endTime = new Date();
  const mins = endTime.getMinutes();
  let hour = endTime.getHours();
  const minutes = Math.floor(time / 60);

  return `Be Back At 
    ${minutes > 59 ? hour + Math.floor(minutes / 60) : hour}
    :${minutes > 59 ? minutes % 60 : ("0" + (minutes + mins)).slice(-2)}`;
}

timeInput.addEventListener("keypress", e => {
  if (e.keyCode === 13 || e.which === 13) {
    e.preventDefault();
    startTimer(e.target.value * 60);
  }
});

timeButtons.forEach(button => {
  button.addEventListener("click", e => {
    startTimer(e.target.dataset.time);
  });
});
