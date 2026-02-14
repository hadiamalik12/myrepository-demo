const unlockBtn = document.getElementById("unlockBtn");
const heartsLayer = document.getElementById("heartsLayer");

let heartInterval;

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";

  const size = Math.random() * 20 + 10;
  const duration = Math.random() * 3 + 4;
  const x = Math.random() * 100;
  const drift = `${(Math.random() - 0.5) * 160}px`;
  const shades = ["#ff73a8", "#ff8db7", "#ffc0d8", "#ff5f9d"];

  heart.style.left = `${x}%`;
  heart.style.setProperty("--size", `${size}px`);
  heart.style.setProperty("--duration", `${duration}s`);
  heart.style.setProperty("--drift", drift);
  heart.style.setProperty("--color", shades[Math.floor(Math.random() * shades.length)]);

  heartsLayer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

unlockBtn.addEventListener("click", () => {
  document.body.classList.add("unlocked");
  unlockBtn.classList.add("hidden");

  for (let i = 0; i < 18; i += 1) {
    setTimeout(createHeart, i * 120);
  }

  if (!heartInterval) {
    heartInterval = setInterval(createHeart, 260);
  }
});
