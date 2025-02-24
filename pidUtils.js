function setupCopyPidToClipboard() {
    const pidButton = document.getElementById('pidButton');
    const pidCopyLabel = document.getElementById('pidCopyLabel');
    const pidInput = document.getElementById('pidInput');

    pidButton.addEventListener("click", () => {
        // Añadir al portapapeles el PID seleccionado y mostrar mensaje

        const pid = pidInput.value;
        copyTextToClipboard(pid);

        pidCopyLabel.textContent = TRANSLATIONS[currentLanguage].pidCopiedText;
    });

    pidButton.addEventListener("mouseleave", () => {
        // Reestablecer el mnesaje de copiar al portapapeles
        pidCopyLabel.textContent = TRANSLATIONS[currentLanguage].pidCopyLabel;
    });
}

function setupRerollPid() {
    const pidRerollButton = document.getElementById('pidRerollButton');
    const pidInput = document.getElementById('pidInput');

    pidRerollButton.addEventListener("click", () => {
        // Generar un nuevo PID aleatorio y mostrarlo
        const newPid = generateRandomPid();
        drawSpindaBasedOnPid(newPid, pidInput);
    });
}

function copyTextToClipboard(text) {
    // Copiar texto al portapapeles
    navigator.clipboard.writeText(text);
}

function generateRandomPid() {
    const randomPid = Math.floor(Math.random() * 0xFFFFFFFF).toString(16)
    return cleanPid(randomPid);
}

function cleanPid(pid) {
    const HEX_NUMBER_REGEX = /[^0-9A-Fa-f]/g;

    // Si el PID está vacío, generamos un PID de 8 ceros
    pid ||= '';

    return pid.replace(HEX_NUMBER_REGEX, '')
        .toUpperCase()
        .padStart(8, '0');
}

// Inicialización de las funciones sobre el PID cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setupCopyPidToClipboard();
    setupRerollPid();
});

// Exportar funciones para uso global si es necesario
window.setupCopyPidToClipboard = setupCopyPidToClipboard;
window.setupRerollPid = setupRerollPid;
window.generateRandomPid = generateRandomPid;
window.cleanPid = cleanPid;
