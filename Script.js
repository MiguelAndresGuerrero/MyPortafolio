document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio cargado correctamente");

    const body = document.body;
    const lightModeIcon = document.getElementById("light-mode");
    const darkModeIcon = document.getElementById("dark-mode");
    const toggleButton = document.getElementById("toggle-dark-mode");
    const modeText = document.getElementById("mode-text");
    const footer = document.querySelector("footer");

    // Verificar elementos esenciales
    if (!lightModeIcon || !darkModeIcon || !toggleButton || !modeText || !footer) {
        console.error("No se encontraron algunos elementos necesarios en el DOM.");
        return;
    }

    // 🌙 Cargar el modo oscuro desde localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";
    actualizarModo(isDarkMode);

    // 🎭 Alternar modo oscuro
    toggleButton.addEventListener("click", function () {
        const isDarkMode = !body.classList.contains("dark-mode");
        actualizarModo(isDarkMode);
    });

    function actualizarModo(isDark) {
        body.classList.toggle("dark-mode", isDark);
        footer.classList.toggle("footer-animado", isDark);
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

        lightModeIcon.style.display = isDark ? "none" : "inline";
        darkModeIcon.style.display = isDark ? "inline" : "none";
        modeText.textContent = isDark ? "Modo Claro" : "Modo Oscuro";
    }

    // ✅ Inicializar Swiper si existe
    if (document.querySelector(".mySwiper")) {
        new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            autoplay: { delay: 1000, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            breakpoints: { 1024: { slidesPerView: 4 }, 768: { slidesPerView: 3 }, 480: { slidesPerView: 2 } }
        });
    }

    // 📝 Animación de texto dinámico
    const frases = [
        "¡Bienvenido a mi mundo digital! 👋",
        "Apasionado por la tecnología y el código 💻",
        "Crafteando el futuro con cada línea de código 🌐"
    ];

    const elemento = document.querySelector(".neon-text");
    if (elemento) {
        let indexFrase = 0, indexLetra = 0, escribiendo = true;

        // ✍️ Escribir texto
        function escribirTexto() {
            if (escribiendo) {
                if (indexLetra < frases[indexFrase].length) {
                    elemento.textContent += frases[indexFrase][indexLetra++];
                    setTimeout(escribirTexto, 50);
                } else {
                    escribiendo = false;
                    setTimeout(borrarTexto, 2000);
                }
            }
        }

        // 🗑️ Borrar texto
        function borrarTexto() {
            if (!escribiendo) {
                if (indexLetra > 0) {
                    elemento.textContent = frases[indexFrase].slice(0, --indexLetra);
                    setTimeout(borrarTexto, 30);
                } else {
                    escribiendo = true;
                    indexFrase = (indexFrase + 1) % frases.length;
                    setTimeout(escribirTexto, 500);
                }
            }
        }

        escribirTexto();
    }

    // ⏳ Ocultar Splash Screen
    const splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add("fade-out");
            setTimeout(() => {
                splashScreen.style.display = "none";
                body.style.pointerEvents = "auto";
            }, 1000);
        }, 1000);
        body.style.pointerEvents = "none";
    }
});

// 😶‍🌫️ Ocultar menu de cambio de colores
document.addEventListener("click", function (event) {
    const menuToggle = document.getElementById("menu-toggle");
    const menuContainer = document.querySelector(".menu-container");

    if (!menuContainer.contains(event.target) && menuToggle.checked) {
        menuToggle.checked = false;
    }
});

document.getElementById("toggle-dark-mode").addEventListener("click", function() {
    document.body.classList.toggle("theme-dark");
});
