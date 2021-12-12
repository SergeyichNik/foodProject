function modal() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');  

    function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
    }      

    modalTrigger.forEach((item) => {
    item.addEventListener('click', openModal);
    });

    function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
    });

    document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        closeModal();
    }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll',showModalByScroll);
    }
    }

    window.addEventListener('scroll',showModalByScroll);
}

module.exports = modal;