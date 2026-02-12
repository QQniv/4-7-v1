(function () {
  const heroVisual = document.querySelector('.hero-visual');
  const heroPhoto = document.querySelector('.hero-photo');

  if (!heroVisual || !heroPhoto) return;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const setTilt = (x, y) => {
    heroPhoto.style.setProperty('--hero-tilt-x', `${x}deg`);
    heroPhoto.style.setProperty('--hero-tilt-y', `${y}deg`);
    heroPhoto.style.setProperty('--hero-lift', `${Math.abs(y) * 1.8}px`);
  };

  heroVisual.addEventListener('pointermove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const tiltX = clamp((px - 0.5) * 9, -4.5, 4.5);
    const tiltY = clamp((0.5 - py) * 7, -3.5, 3.5);

    setTilt(tiltX, tiltY);
  });

  heroVisual.addEventListener('pointerleave', () => {
    setTilt(0, 0);
  });
})();
