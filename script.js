/* ==========================================
   ANIMACIONES
========================================== */

.animation-element {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.animation-element.visible {
    opacity: 1;
    transform: translateY(0);
}