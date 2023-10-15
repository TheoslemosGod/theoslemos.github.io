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
    }, 200); 
}, 0); // No esperar y ocultar inmediatamente

// Carga la primera sección
setTimeout(function() {
    const section1 = document.querySelector(".section1");
    section1.style.opacity = "1"; // Muestra la sección
}, 200);

// Función para cambiar el fondo a la imagen con transición de difuminado
function transitionToImageBackground() {
    const body = document.body;

    // Cambia el fondo de negro a la imagen deseada
    body.style.backgroundImage = "url('https://i.imgur.com/prtQgf3.jpg')";

    // Espera un momento antes de aplicar la transición
    setTimeout(function() {
        body.style.backgroundColor = "transparent"; // Cambia el fondo de negro a transparente
    }, 200); 
}


transitionToImageBackground();