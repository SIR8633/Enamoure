document.addEventListener('DOMContentLoaded', () => {
    const spraySound = document.getElementById('spraySound');
    const wooshSound = document.getElementById('wooshSound');

    // Sonido de spray de perfume al pasar el mouse por los botones
    document.querySelectorAll('.btn, .btn-card').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            if (spraySound) {
                spraySound.currentTime = 0;
                spraySound.volume = 0.2;
                spraySound.play().catch(e => { /* Ignorar error si el usuario no ha interactuado */ });
            }
        });
    });

    // Transición y sonido suave en la navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (wooshSound) {
                wooshSound.currentTime = 0;
                wooshSound.volume = 0.3;
                wooshSound.play().catch(e => { });
            }

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
