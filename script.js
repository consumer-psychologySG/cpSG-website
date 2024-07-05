document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.hamburger-menu');
    const sideMenu = document.querySelector('.side-menu');
    const closeButton = document.querySelector('.close-button');

    menuToggle.addEventListener('click', function () {
        sideMenu.classList.toggle('show-menu');
    });

    closeButton.addEventListener('click', function () {
        sideMenu.classList.remove('show-menu');
    });

    const posters = document.querySelectorAll('.poster');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');

    posters.forEach(poster => {
        poster.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.dataset.large;
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
