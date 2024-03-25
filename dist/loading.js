"use strict";
// Mostra il pezzo di caricamento
function showLoading(container) {
    container.style.display = "none";
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'block';
        // Nascondi il pezzo di caricamento dopo 1 secondi (1000 millisecondi)
        setTimeout(() => {
            hideLoading(container);
        }, 1000);
    }
}
function hideLoading(container) {
    const loadingOverlay = document.getElementById('loadingOverlay');
    container.style.display = "block";
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}
