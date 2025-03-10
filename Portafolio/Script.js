document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio cargado correctamente");

    const body = document.body;
    const lightModeIcon = document.getElementById("light-mode");
    const darkModeIcon = document.getElementById("dark-mode");
    const toggleButton = document.getElementById("toggle-dark-mode");
    const modeText = document.getElementById("mode-text");
    const footer = document.querySelector("footer");

    if (!lightModeIcon || !darkModeIcon || !toggleButton || !modeText || !footer) {
        console.error("No se encontraron algunos elementos necesarios en el DOM.");
        return;
    }

    const isDarkMode = localStorage.getItem("darkMode") === "enabled";
    body.classList.toggle("dark-mode", isDarkMode);
    footer.classList.toggle("footer-animado", isDarkMode);
    actualizarIconosModo(isDarkMode);

    // 🎭 Evento para el botón de cambio de modo
    toggleButton.addEventListener("click", function () {
        const isDarkMode = body.classList.toggle("dark-mode");
        footer.classList.toggle("footer-animado", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        actualizarIconosModo(isDarkMode);
    });

    function actualizarIconosModo(isDarkMode) {
        lightModeIcon.style.display = isDarkMode ? "none" : "inline";
        darkModeIcon.style.display = isDarkMode ? "inline" : "none";
        modeText.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";
    }

    // ✅ Verifica si existe el contenedor Swiper antes de inicializarlo
    if (document.querySelector(".mySwiper")) {
        new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                480: { slidesPerView: 2 }
            }
        });
    }

    // 📝 Animación de texto dinámico
    const frases = [
        "¡Bienvenido a mi mundo digital! 👋",
        "Apasionado por la tecnología y el código 💻",
        "Crafteando el futuro con cada línea de código 🌐",
    ];

    const elemento = document.querySelector(".neon-text");
    if (elemento) {
        let indexFrase = 0;
        let indexLetra = 0;
        let escribiendo = true;

        function escribirTexto() {
            if (escribiendo) {
                if (indexLetra < frases[indexFrase].length) {
                    elemento.innerHTML += frases[indexFrase].charAt(indexLetra);
                    indexLetra++;
                    setTimeout(escribirTexto, 50);
                } else {
                    escribiendo = false;
                    setTimeout(borrarTexto, 2000);
                }
            }
        }

        function borrarTexto() {
            if (!escribiendo) {
                if (indexLetra > 0) {
                    elemento.innerHTML = frases[indexFrase].substring(0, indexLetra - 1);
                    indexLetra--;
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

setTimeout(() => {
    document.getElementById("splash-screen").classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
    }, 700);
}, 1000);

