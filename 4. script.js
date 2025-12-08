const app = document.querySelector(".app");
const warpStatus = document.getElementById("warpStatus");
const gToggle = document.getElementById("gToggle");

let isActive = false;
let bootTimeouts = [];
let pulseInterval = null;

/* Basınca çalışan ana fonksiyon */
gToggle.addEventListener("click", () => {
  // hybrid ripple + glow animasyonu
  gToggle.classList.remove("ripple", "glow");
  void gToggle.offsetWidth; // reflow hilesi
  gToggle.classList.add("ripple", "glow");
  setTimeout(() => gToggle.classList.remove("ripple"), 200);
  setTimeout(() => gToggle.classList.remove("glow"), 350);

  if (!isActive) {
    startBootSequence();
  } else {
    shutdownSequence();
  }
});

function clearBoot() {
  bootTimeouts.forEach((id) => clearTimeout(id));
  bootTimeouts = [];
}

function startBootSequence() {
  clearBoot();
  clearPulse();

  isActive = false;
  app.classList.remove("standby", "active", "shutting-down");
  app.classList.add("booting");

  warpStatus.textContent = "SYSTEM INITIALIZING...";

  bootTimeouts.push(
    setTimeout(() => {
      warpStatus.textContent = "WARP CORE ONLINE";
    }, 600)
  );

  bootTimeouts.push(
    setTimeout(() => {
      warpStatus.textContent = "SYNCING MODULES...";
    }, 1200)
  );

  bootTimeouts.push(
    setTimeout(() => {
      warpStatus.textContent = "WARP STATUS: ONLINE";
      app.classList.remove("booting");
      app.classList.add("active");
      isActive = true;
      startPulse();
    }, 1900)
  );
}

function startPulse() {
  clearPulse();

  pulseInterval = setInterval(() => {
    // nabız efekti
    app.classList.add("pulse-active");
    setTimeout(() => {
      app.classList.remove("pulse-active");
    }, 180);
  }, 2400);
}

function clearPulse() {
  if (pulseInterval) {
    clearInterval(pulseInterval);
    pulseInterval = null;
  }
  app.classList.remove("pulse-active");
}

function shutdownSequence() {
  clearBoot();
  clearPulse();

  app.classList.add("shutting-down");
  warpStatus.textContent = "WARP STATUS: OFFLINE";

  setTimeout(() => {
    app.classList.remove("active", "shutting-down");
    app.classList.add("standby");
    warpStatus.textContent = "WARP STATUS: STANDBY";
    isActive = false;
  }, 700);
}

/* Başlangıç durumu */
app.classList.add("standby");