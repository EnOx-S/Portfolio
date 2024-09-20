document.addEventListener('mousemove', function (e) {
    const moveX = (e.clientX / window.innerWidth) * 100;
    const moveY = (e.clientY / window.innerHeight) * 100;
    
    // Déplace l'image d'arrière-plan en fonction du mouvement de la souris
    document.body.style.backgroundPosition = `${moveX}% ${moveY}%`;
});