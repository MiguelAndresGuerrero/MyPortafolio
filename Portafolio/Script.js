document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio cargado correctamente");

    const body = document.body;
    const lightModeIcon = document.getElementById("light-mode");
    const darkModeIcon = document.getElementById("dark-mode");
    const toggleButton = document.getElementById("toggle-dark-mode");
    const modeText = document.getElementById("mode-text");

    if (!lightModeIcon || !darkModeIcon || !toggleButton || !modeText) {
        console.error("No se encontraron algunos elementos necesarios en el DOM.");
        return;
    }

    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    body.classList.toggle("dark-mode", isDarkMode);
    lightModeIcon.style.display = isDarkMode ? "none" : "inline";
    darkModeIcon.style.display = isDarkMode ? "inline" : "none";
    toggleButton.style.color = isDarkMode ? "white" : "black";
    modeText.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";
});

function toggleDarkMode() {
    const body = document.body;
    const lightModeIcon = document.getElementById("light-mode");
    const darkModeIcon = document.getElementById("dark-mode");
    const toggleButton = document.getElementById("toggle-dark-mode");
    const modeText = document.getElementById("mode-text");

    const isDarkMode = body.classList.toggle("dark-mode");

    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

    lightModeIcon.style.display = isDarkMode ? "none" : "inline";
    darkModeIcon.style.display = isDarkMode ? "inline" : "none";
    toggleButton.style.color = isDarkMode ? "white" : "black";
    modeText.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";
}

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
});