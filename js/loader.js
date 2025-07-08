document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector('.loader');

    fetch('libraries.html?v=' + new Date().getTime())
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML('beforeend', data);
            return fetch('navbar.html?v=' + new Date().getTime());
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            return fetch('footer.html?v=' + new Date().getTime());
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            loader.style.display = 'none'; // Ladeanimation ausblenden
        })
        .catch(error => console.error('Fehler beim Laden:', error));
});
