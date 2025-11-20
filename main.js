document.addEventListener('DOMContentLoaded', () => {
    const btnAbrirModal = document.getElementById('abrirModalLogin');
    const modalOverlay = document.getElementById('modalOverlay');
    const labelUsuario = document.querySelector('.usuario-link .label');
    let loginForm = null;
    let contenidoCargado = false; // Bandera para cargar solo una vez

    // Función para mostrar/ocultar el modal
    function toggleModal(show) {
        modalOverlay.classList.toggle('oculto', !show);
        document.body.style.overflow = show ? 'hidden' : 'auto';
        
        if (!show && loginForm) {
            // Limpiar campos y errores al cerrar
            loginForm.reset(); 
            const errorMsg = document.getElementById('errorMsg');
            if (errorMsg) errorMsg.textContent = '';
        }
    }
    
    // Función para manejar el envío del formulario cargado
    function handleLoginSubmit(e) {
        e.preventDefault(); 
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMsg = document.getElementById('errorMsg');

        // SIMULACIÓN DE LOGIN
        if (username === 'test' && password === '1234') {
            errorMsg.textContent = '';
            toggleModal(false);
            labelUsuario.innerHTML = `Hola,<br>TestUser`;
        } else {
            errorMsg.textContent = 'Usuario o contraseña incorrectos. Usa "test" y "1234" para probar.';
        }
    }

    // Función principal para cargar el HTML de login
    async function cargarLoginModal() {
        try {
            // Realiza la petición para obtener el contenido de login.html
            const response = await fetch('login.html');
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo: ${response.status}`);
            }
            const htmlContent = await response.text();
            
            // Inserta el HTML en el contenedor del modal
            modalOverlay.innerHTML = htmlContent;
            
            // Asigna el formulario y añade el listener
            loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.addEventListener('submit', handleLoginSubmit);
            }
            contenidoCargado = true; // Marca como cargado
        } catch (error) {
            console.error('No se pudo cargar el modal de login:', error);
            modalOverlay.innerHTML = '<p style="color:white; padding: 20px;">Error al cargar el formulario. Asegúrate de que login.html existe.</p>';
        }
    }

    // Evento para ABRIR el modal
    btnAbrirModal.addEventListener('click', () => {
        // Cargar el HTML solo si no se ha cargado antes
        if (!contenidoCargado) {
            cargarLoginModal();
        }
        toggleModal(true);
    });

    // Evento para CERRAR el modal al hacer clic en el fondo transparente
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            toggleModal(false);
        }
    });
});