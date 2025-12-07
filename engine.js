/* ------------------------------------------------------
   XADIK GALACTIC ENGINE v2
   Tek AudioContext — Stabil Ses Motoru
-------------------------------------------------------*/

// GLOBAL AUDIO CONTEXT
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// MASTER NODES
const masterGain = audioCtx.createGain();
masterGain.gain.value = 0.8;

const masterPan = audioCtx.createStereoPanner();
masterPan.pan.value = 0;

masterPan.connect(masterGain);
masterGain.connect(audioCtx.destination);

// SAFE RESUME
function resumeAudio() {
    if (audioCtx.state === "suspended") audioCtx.resume();
}

// STATUS + BUTTONS
const statusBox = document.getElementById("status");
const activateBtn = document.getElementById("activate");
const deactivateBtn = document.getElementById("deactivate");


/* ------------------------------------------------------
   QUANTUM DRIFT v2
-------------------------------------------------------*/
let quantumInterval;

function startQuantumDrift() {
    quantumInterval = setInterval(() => {
        const drift = Math.random();

        masterGain.gain.value = 0.6 + drift * 0.3;
        masterPan.pan.value = (Math.random() * 2 - 1) * 0.4;

    }, 1200);
}

function stopQuantumDrift() {
    clearInterval(quantumInterval);
}


/* ------------------------------------------------------
   PULSAR ENGINE v2 — Optimize
-------------------------------------------------------*/
let pulsarInterval;

function playPulsarPing() {
    resumeAudio();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const pan = audioCtx.createStereoPanner();

    const freq = Math.random() * 1500 + 300;
    const vol = Math.random() * 0.2 + 0.05;

    osc.type = "sine";
    osc.frequency.value = freq;

    gain.gain.value = vol;
    pan.pan.value = Math.random() * 2 - 1;

    osc.connect(gain);
    gain.connect(pan);
    pan.connect(masterGain);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
}

function startPulsarEngine() {
    pulsarInterval = setInterval(playPulsarPing, Math.random() * 2500 + 1500);
}

function stopPulsarEngine() {
    clearInterval(pulsarInterval);
}


/* ------------------------------------------------------
   SPIRAL ENGINE v2
-------------------------------------------------------*/
let spiralInterval;

function startSpiralEngine() {
    spiralInterval = setInterval(() => {
        const t = Date.now() / 1000;

        masterPan.pan.value = Math.sin(t * 0.4) * 0.6;
        masterGain.gain.value = 0.7 + 0.1 * Math.sin(t * 0.6);

    }, 50);
}

function stopSpiralEngine() {
    clearInterval(spiralInterval);
}


/* ------------------------------------------------------
   COSMIC WIND v2
-------------------------------------------------------*/
let windNode, windGain, windInterval;

function startCosmicWind() {
    const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 2, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.2;
    }

    windNode = audioCtx.createBufferSource();
    windNode.buffer = buffer;
    windNode.loop = true;

    windGain = audioCtx.createGain();
    windGain.gain.value = 0.15;

    windNode.connect(windGain);
    windGain.connect(masterGain);

    windNode.start();

    windInterval = setInterval(() => {
        windGain.gain.value = 0.1 + Math.random() * 0.15;
    }, 1200);
}

function stopCosmicWind() {
    try { windNode.stop(); } catch {}
    clearInterval(windInterval);
}


/* ------------------------------------------------------
   ENGINE CONTROL
-------------------------------------------------------*/
activateBtn.onclick = () => {
    resumeAudio();

    startQuantumDrift();
    startPulsarEngine();
    startSpiralEngine();
    startCosmicWind();

    statusBox.innerText = "Galactic Engine v2 • Çalışıyor";
};

deactivateBtn.onclick = () => {
    stopQuantumDrift();
    stopPulsarEngine();
    stopSpiralEngine();
    stopCosmicWind();

    statusBox.innerText = "Durdu";
};