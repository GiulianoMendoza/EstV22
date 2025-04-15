function openPopup() {
    const popup = document.getElementById('popup');
    const content = document.querySelector('.contenedor');

    // Verificar si es la primera carga de la sesión
    if (!sessionStorage.getItem('popupShown')) {
        popup.style.display = 'flex';

        sessionStorage.setItem('popupShown', 'true'); // Marcar como visto en esta sesión

        setTimeout(function() {
            popup.style.display = 'none';
            window.location.href = 'index.html';
        }, 10000);
    }
}

document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    const content = document.querySelector('.contenedor');

    popup.style.display = 'none';
});

window.addEventListener('load', openPopup);