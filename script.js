const text = "Hello World, I'm Anushka!";
let i = 0;

function typeWriter() {
  const target = document.getElementById("typewriter");
  if (i === 0) target.innerHTML = ""; // Clear only once per full cycle

  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Call typewriter once on load
window.onload = () => {
  typeWriter();
  renderAllKuromis();
};

// Re-trigger every 15 seconds
setInterval(() => {
  i = 0;
  typeWriter();
}, 15000);

function fillKuromis(containerId, imageSrc) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const screenHeight = window.innerHeight;
  const kuromiHeight = 60;
  const count = Math.ceil((screenHeight * 2) / kuromiHeight);

  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = imageSrc;
    if (i % 2 === 1) img.classList.add('rotated');
    container.appendChild(img);
  }
}

function renderAllKuromis() {
  fillKuromis('kuromiScrollLeft', 'kuromi-icon.png');
  fillKuromis('kuromiScrollRight', 'kuromi-icon.png');
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(renderAllKuromis, 200);
});
