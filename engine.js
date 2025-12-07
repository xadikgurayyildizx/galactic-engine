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
// --- COSMIC WIND LAYER ---
let windNode, windGain, windPan, windFilter, windInterval;

function startCosmicWind() {
    const ctx = new AudioContext();

    // Create noise buffer
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.3;
    }

    windNode = ctx.createBufferSource();
    windNode.buffer = noiseBuffer;
    windNode.loop = true;

    windGain = ctx.createGain();
    windGain.gain.value = 0.2;

    windPan = ctx.createStereoPanner();
    windPan.pan.value = 0;

    windFilter = ctx.createBiquadFilter();
    windFilter.type = "lowpass";
    windFilter.frequency.value = 300;

    windNode.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(windPan);
    windPan.connect(ctx.destination);

    windNode.start();

    // AUTO movement
    windInterval = setInterval(() => {
        const drift = Math.random() * 0.6 + 0.2;

        // Filter breathing
        windFilter.frequency.value = 200 + drift * 800;

        // Pan drift left/right
        windPan.pan.value = Math.random() * 2 - 1;

        // Volume shift
        windGain.gain.value = 0.15 + Math.random() * 0.2;

    }, 1500);
}

function stopCosmicWind() {
    try { windNode.stop(); } catch (e) {}
    clearInterval(windInterval);
}


// Activate'e bağla
activateBtn.onclick = () => {
    active = true;
    statusBox.innerText = "Aktif • Quantum + Pulsar + Cosmic Wind Çalışıyor ⚡";

    startQuantumDrift();
    startPulsarEngine();
    startCosmicWind();
};

deactivateBtn.onclick = () => {
    active = false;
    statusBox.innerText = "Durdu.";

    stopQuantumDrift();
    stopPulsarEngine();
    stopCosmicWind();
    vibrate(0);
};
// --- DIMENSIONAL SPIRAL ENGINE ---
let spiralInterval;

function startSpiralEngine() {
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 120; // temel titreşim

    const gain = ctx.createGain();
    gain.gain.value = 0.15;

    const pan = ctx.createStereoPanner();
    pan.pan.value = 0;

    osc.connect(gain);
    gain.connect(pan);
    pan.connect(ctx.destination);

    osc.start();

    // Spiral hareket
    spiralInterval = setInterval(() => {
        const t = Date.now() / 1000;

        // Pan spiral (sağ-sol dönüş)
        pan.pan.value = Math.sin(t * 0.7);

        // Spiral genişleme
        gain.gain.value = 0.1 + 0.05 * Math.sin(t * 1.1);

        // Spiral frekans dalgası
        osc.frequency.value = 120 + 15 * Math.sin(t * 0.9);

    }, 50);
}

function stopSpiralEngine() {
    clearInterval(spiralInterval);
}startSpiralEngine();
stopSpiralEngine();
