const statusBox = document.getElementById("status");
const activateBtn = document.getElementById("activate");
const deactivateBtn = document.getElementById("deactivate");

let active = false;

// --- QUANTUM DRIFT (AUTO MODE) ---
let quantumInterval;

function startQuantumDrift() {
    quantumInterval = setInterval(() => {
        // STS modulation random drift
        const sts = Math.random() * 0.9 + 0.1;

        // Density fluctuates like breathing
        const density = Math.random();

        // Reverb depth shift
        const reverb = Math.random() * 0.8 + 0.2;

        // Console info (iPhone gizli)
        console.log("Quantum Drift → STS:", sts, "Density:", density, "Reverb:", reverb);

        // Vibration pattern (tiny)
        vibrate([40, 20, 60, 10, 80]);

    }, 2000); // her 2 saniyede bir evren hareket eder
}

function stopQuantumDrift() {
    clearInterval(quantumInterval);
}

// --- VIBRATION MOTOR ---
function vibrate(freq) {
    if (window.navigator.vibrate) {
        window.navigator.vibrate(freq);
    }
}

// --- CONTROLS ---
activateBtn.onclick = () => {
    active = true;
    statusBox.innerText = "Aktif • Quantum Enerji Alanı Çalışıyor ⚡";

    startQuantumDrift();
};

deactivateBtn.onclick = () => {
    active = false;
    statusBox.innerText = "Durdu.";

    stopQuantumDrift();
    vibrate(0);
};
// --- GALACTIC PULSAR ENGINE ---
let pulsarInterval;

function startPulsarEngine() {
    pulsarInterval = setInterval(() => {

        // Random ping frequency (high cosmic tone)
        const frequency = Math.floor(Math.random() * 1500) + 300;

        // Random volume
        const volume = Math.random() * 0.4 + 0.1;

        // Random pan movement (left <-> right)
        const pan = Math.random() * 2 - 1;

        playPulsarPing(frequency, volume, pan);

    }, Math.random() * 3000 + 1500); 
    // 1.5–4.5 saniye arası rastgele
}

function stopPulsarEngine() {
    clearInterval(pulsarInterval);
}

// Pulse ping
function playPulsarPing(freq, vol, panPos) {
    if (!window.AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const pan = ctx.createStereoPanner();

    osc.type = "sine";
    osc.frequency.value = freq;

    gain.gain.value = vol;
    pan.pan.value = panPos;

    osc.connect(gain);
    gain.connect(pan);
    pan.connect(ctx.destination);

    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    osc.stop(ctx.currentTime + 1.3);
}

// Activate bağlama
activateBtn.onclick = () => {
    active = true;
    statusBox.innerText = "Aktif • Quantum + Pulsar Enerji Alanı Çalışıyor ⚡";

    startQuantumDrift();
    startPulsarEngine();
};

deactivateBtn.onclick = () => {
    active = false;
    statusBox.innerText = "Durdu.";

    stopQuantumDrift();
    stopPulsarEngine();
    vibrate(0);
};
