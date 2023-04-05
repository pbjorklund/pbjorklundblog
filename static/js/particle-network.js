class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 2;
      this.speedX = 0;
      this.speedY = 0;
      this.color = 'rgba(100, 200, 255, 0.5)';
    }
  
    draw() {
      networkCtx.fillStyle = this.color;
      networkCtx.strokeStyle = this.color;
      networkCtx.lineWidth = this.size;
  
      networkCtx.beginPath();
      networkCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      networkCtx.closePath();
      networkCtx.fill();
    }
  }
  
  const networkCanvas = document.createElement('canvas');
  document.body.appendChild(networkCanvas);
  networkCanvas.width = window.innerWidth;
  networkCanvas.height = window.innerHeight;
  networkCanvas.style.position = 'fixed';
  networkCanvas.style.top = '0';
  networkCanvas.style.left = '0';
  networkCanvas.style.zIndex = '-1';
  networkCanvas.classList.add('network-canvas');
  
  const networkCtx = networkCanvas.getContext('2d');
  const particlesArray = [];
  const numberOfParticles = 10;
  
  let mouseX = null;
  let mouseY = null;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  const createParticle = (x, y) => {
    const particle = new Particle(x, y);
    particlesArray.push(particle);
  };
  
  const drawParticles = () => {
    networkCtx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);
  
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].draw();
  
      if (i !== 0) {
        networkCtx.beginPath();
        networkCtx.moveTo(particlesArray[i - 1].x, particlesArray[i - 1].y);
        networkCtx.lineTo(particlesArray[i].x, particlesArray[i].y);
        networkCtx.stroke();
      }
    }
  };
  
  const animateParticles = () => {
    drawParticles();
    const timer = setTimeout(() => {
      if (mouseX && mouseY) {
        createParticle(mouseX, mouseY);
      }
  
      if (particlesArray.length > numberOfParticles) {
        particlesArray.shift();
      }
  
      requestAnimationFrame(animateParticles);
    }, 100); // Increase the time interval between point additions
  };
  
  animateParticles();