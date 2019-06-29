const myVideo = document.querySelector(".player__video");
const playBtn = document.querySelector(".playbutton");
const videoVolume = document.querySelector('input[name="volume"]');
const videoSpeed = document.querySelector('input[name="playbackRate"]');
const currentTime = document.querySelector(".progress__filled");
const rewind = document.querySelectorAll("button[data-skip]");
const progressBar = document.querySelector(".progress");

function skipTime() {
  if (myVideo.currentTime != myVideo.duration) {
    myVideo.currentTime += +this.dataset.skip;
  }
}

myVideo.addEventListener("timeupdate", () => {
  currentTime.style.flexBasis = `${(myVideo.currentTime / myVideo.duration) *
    100}%`;
});

rewind.forEach(button => {
  button.addEventListener("click", skipTime);
});

playBtn.addEventListener("click", () => {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
});

videoVolume.addEventListener("input", () => {
  myVideo.volume = videoVolume.value;
});
videoSpeed.addEventListener("input", () => {
  myVideo.playbackRate = videoSpeed.value;
});

progressBar.addEventListener("click", e => {
  let xPosition = e.layerX;
  //   let barWidth = progressBar.clientWidth;
  let barWidth = document.querySelector(".player").clientWidth;

  let clickPosition = xPosition / barWidth;

  myVideo.currentTime = myVideo.duration * clickPosition;
});
