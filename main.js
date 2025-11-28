 document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos
    const botonesNav = document.querySelectorAll('.btn-nav');
    const paneles = document.querySelectorAll('.panel-info');
    const overlay = document.getElementById('overlay');

    // Función para cerrar todo
    function cerrarTodo() {
        paneles.forEach(panel => panel.classList.remove('mostrar'));
        botonesNav.forEach(btn => btn.classList.remove('activo'));
        overlay.classList.add('oculto');
    }

    // Evento click para cada botón del menú
    botonesNav.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const targetId = boton.getAttribute('data-target');
            const panelTarget = document.getElementById(targetId);
            
            // Si el botón ya estaba activo, cerramos todo (toggle off)
            if (boton.classList.contains('activo')) {
                cerrarTodo();
            } else {
                // 1. Cerramos cualquier otro panel abierto primero
                cerrarTodo(); 
                
                // 2. Activamos el actual
                boton.classList.add('activo');
                if (panelTarget) {
                    panelTarget.classList.add('mostrar');
                    overlay.classList.remove('oculto');
                }
            }
        });
    });

    // Cerrar si se hace click en el overlay (fuera del menú)
    overlay.addEventListener('click', cerrarTodo);

    // Cerrar si se presiona la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cerrarTodo();
        }
    });
});