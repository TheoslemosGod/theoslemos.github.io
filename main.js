window.addEventListener("scroll", function() {
    const header = document.querySelector(".headerOnStart");
    
    if (window.scrollY > 0) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
});

// Oculta el overlay de carga después de un tiempo específico
setTimeout(function() {
    const loadingOverlay = document.querySelector(".loading-overlay");
    loadingOverlay.style.opacity = "0"; // Cambia la opacidad a 0 para ocultar el overlay
    setTimeout(function() {
        loadingOverlay.style.display = "none"; // Oculta completamente el overlay
    }, 200); // Espera 1 segundo (ajusta este valor según tus necesidades)
}, 0); // No esperar y ocultar inmediatamente

// Carga la primera sección
setTimeout(function() {
    const section1 = document.querySelector(".section1");
    section1.style.opacity = "1"; // Muestra la sección
}, 200); // Espera 1 segundos antes de mostrar la sección
