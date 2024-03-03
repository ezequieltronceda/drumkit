function playSound(tecla) {
  const audio = document.querySelector(`audio[data-key= "${tecla.keyCode}"]`);
  const key = document.querySelector(`.key[data-key= "${tecla.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
function removeTransition(tecla) {
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
window.addEventListener("keydown", dobleCheck);
