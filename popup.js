function openPopup() {
    const popup = document.getElementById('popup');
    const content = document.querySelector('.contenedor');

    if (!localStorage.getItem('popupShown')) {
        popup.style.display = 'flex';

        localStorage.setItem('popupShown', 'true'); 
        setTimeout(function () {
            popup.style.display = 'none';
        }, 10000);
    }
}
document.getElementById('close-popup').addEventListener('click', function () {
    const popup = document.getElementById('popup');
    const content = document.querySelector('.contenedor');

    popup.style.display = 'none';
});

window.addEventListener('load', openPopup);