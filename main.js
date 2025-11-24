document.addEventListener('DOMContentLoaded', () => {
    const btnCategorias = document.getElementById("btnCategorias");
    const barraCategorias = document.getElementById("barraCategorias");
    const btnCerrar = document.getElementById("btnCerrarSidebar");
    const overlay = document.getElementById("overlay");

    // Función para abrir/cerrar
    function toggleMenu() {
        barraCategorias.classList.toggle("oculto");
        overlay.classList.toggle("oculto");
        
        // Actualizar aria-expanded para accesibilidad
        const estaOculto = barraCategorias.classList.contains("oculto");
        btnCategorias.setAttribute("aria-expanded", !estaOculto);
    }

    // Evento click en el botón de categorías
    btnCategorias.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el click cierre el menú inmediatamente
        toggleMenu();
    });

    // Evento cerrar con la X
    if(btnCerrar) {
        btnCerrar.addEventListener("click", toggleMenu);
    }

    // Evento cerrar clickeando el fondo oscuro (Overlay)
    if(overlay) {
        overlay.addEventListener("click", toggleMenu);
    }
    
    // (Opcional) Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && !barraCategorias.classList.contains("oculto")) {
            toggleMenu();
        }
    });
});