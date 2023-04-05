document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');

    if (!hero) {
        return;
    }

    // Customizable settings
    const particleCount = 200;
    const particleSize = 2;
    const particleSpeed = 0.5;
    const colorPalette = ['#00ff00', '#ff00ff', '#00ffff'];

    // Create canvas and set dimensions
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    hero.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = 200;

    // Set canvas style
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '2';

    // Create particles
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * particleSize,
            speedX: (Math.random() - 0.5) * particleSpeed,
            speedY: (Math.random() - 0.5) * particleSpeed,
            color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        });
    }

    // Update and draw particles
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let p of particles) {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.y < 0) p.y = canvas.height;
            if (p.x > canvas.width) p.x = 0;
            if (p.y > canvas.height) p.y = 0;

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        requestAnimationFrame(updateParticles);
    }

    updateParticles();

});