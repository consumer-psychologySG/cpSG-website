window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        header.style.background = 'transparent';
    }
});

// スムーススクロールとオフセットのためのコード
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
