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
    }, 2000); // Espera 1 segundo (ajusta este valor según tus necesidades)
}, 0); // No esperar y ocultar inmediatamente

// Carga la primera sección
setTimeout(function() {
    const section1 = document.querySelector(".section1");
    section1.style.opacity = "1"; // Muestra la sección
}, 1000); // Espera 1 segundos antes de mostrar la sección

// Función para cambiar el fondo a la imagen con transición de difuminado
function transitionToImageBackground() {
    const body = document.body;

    // Cambia el fondo de negro a la imagen deseada
    body.style.backgroundImage = "url('https://i.imgur.com/prtQgf3.jpg')";

    // Espera un momento antes de aplicar la transición
    setTimeout(function() {
        body.style.backgroundColor = "transparent"; // Cambia el fondo de negro a transparente
    }, 2000); // Espera 1 segundo (ajusta este valor según tus necesidades)
}

// Llama a la función para aplicar el cambio de fondo
transitionToImageBackground();