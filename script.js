const emojis = ["🎈", "🎉", "💖", "✨", "🌸", "⭐", "🎂", "🥳"];
let popInterval;

function enterSite() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});

  const popSound = document.getElementById("popSound");
  popSound.currentTime = 0;
  popSound.play();

  startPops();
}

/* UNLIMITED BACKGROUND POPUPS */
function startPops() {
  popInterval = setInterval(() => {
    for (let i = 0; i < 3; i++) createPop();
  }, 700);
}

function createPop() {
  const popArea = document.getElementById("popArea");
  const pop = document.createElement("div");

  pop.className = "pop";
  pop.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  pop.style.left = Math.random() * 100 + "vw";
  pop.style.animationDuration = (3 + Math.random() * 3) + "s";

  popArea.appendChild(pop);

  setTimeout(() => pop.remove(), 7000);
}

/* STOP MUSIC WHEN USER LEAVES */
document.addEventListener("visibilitychange", () => {
  const music = document.getElementById("bgMusic");
  if (document.hidden) {
    music.pause();
  } else {
    music.play().catch(() => {});
  }
});

window.addEventListener("beforeunload", () => {
  document.getElementById("bgMusic").pause();
  clearInterval(popInterval);
});
