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
        "Soy Andres Guerrero Desarrollador Full Stack Junior",
        "Apasionado por la tecnología y el código",
        "Crafteando el futuro con cada línea de código"
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
});

// 😶‍🌫️ Ocultar menu de cambio de colores
document.addEventListener("click", function (event) {
    const menuToggle = document.getElementById("menu-toggle");
    const menuContainer = document.querySelector(".menu-container");

    if (!menuContainer.contains(event.target) && menuToggle.checked) {
        menuToggle.checked = false;
    }
});

document.getElementById("toggle-dark-mode").addEventListener("click", function () {
    document.body.classList.toggle("theme-dark");
});

document.addEventListener("DOMContentLoaded", function () {
    const themes = document.querySelectorAll('input[name="theme"]');
    const body = document.body;
    const timelineItems = document.querySelectorAll(".timeline-item");

    const themeColors = {
        theme1: { border: "#C4E7B5", bg: "#5E8D75" },
        theme2: { border: "#D4ECDD", bg: "#4E72A7" },
        theme3: { border: "#FBE3B9", bg: "#D99171" },
        theme4: { border: "#D6D7FF", bg: "#8E77B8" },
        theme5: { border: "#FDD0E5", bg: "#C07C9E" },
    };

    function applyTheme(selectedTheme) {
        if (themeColors[selectedTheme]) {
            body.style.backgroundColor = themeColors[selectedTheme].bg;
            timelineItems.forEach(item => {
                item.style.borderLeft = `6px solid ${themeColors[selectedTheme].border}`;
                item.style.backgroundColor = themeColors[selectedTheme].border;
            });
        }
    }

    themes.forEach(theme => {
        theme.addEventListener("change", function () {
            applyTheme(this.id);
        });
    });
});
