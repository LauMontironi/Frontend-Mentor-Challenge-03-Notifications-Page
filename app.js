

// BOTONES DE MODO OSCURO / CLARO
const darkMode = document.getElementById('dark_mode');
const lightMode = document.getElementById('light_mode');

darkMode.addEventListener('click', () => {
    document.body.classList.add('colorBlack');
    darkMode.style.display = 'none';
    lightMode.style.display = 'block';
});

lightMode.addEventListener('click', () => {
    document.body.classList.remove('colorBlack');
    darkMode.style.display = 'block';
    lightMode.style.display = 'none';
});

// POSTS Y CONTADOR
const posts = document.querySelectorAll('.post, .post-read');
const MarkasRead = document.querySelector('.notification p');
const Notificaciones = document.getElementById('contador');

// Función que actualiza el contador
function actualizarContador() {
    const noleidos = document.querySelectorAll('.post.notread, .post-read.notread');
    Notificaciones.textContent = noleidos.length;
}

// Inicializar contador al cargar
actualizarContador();

// Toggle individual al clickar cada post
posts.forEach(post => {
    post.addEventListener('click', () => {
        post.classList.toggle('notread');
        actualizarContador();
    });
});

// Marcar todos como leídos
MarkasRead.addEventListener('click', () => {
    posts.forEach(post => post.classList.remove('notread'));
    actualizarContador();
});