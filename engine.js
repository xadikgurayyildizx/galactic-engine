const statusBox = document.getElementById("status");
const activateBtn = document.getElementById("activate");
const deactivateBtn = document.getElementById("deactivate");

let active = false;

function vibrate(freq) {
    if (window.navigator.vibrate) {
        window.navigator.vibrate(freq);
    }
}

activateBtn.onclick = () => {
    active = true;
    statusBox.innerText = "Aktif • Enerji Alanı Çalışıyor ⚡";
    loop();
};

deactivateBtn.onclick = () => {
    active = false;
    statusBox.innerText = "Durdu.";
    vibrate(0);
};

function loop() {
    if (!active) return;

    vibrate([30, 50, 80, 20, 100]); // titreşim dizisi
    setTimeout(loop, 1000); // her saniye çalışır
}
