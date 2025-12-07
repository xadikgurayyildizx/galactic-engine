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