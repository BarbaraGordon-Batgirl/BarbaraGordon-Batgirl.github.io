const text = "Hello World, I'm Anushka!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

function fillKuromis(containerId, imageSrc) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const screenHeight = window.innerHeight;
  const kuromiHeight = 60; // 40px + 20px margin
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

// 🧠 Debounced Resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    renderAllKuromis();
  }, 200);
});

// ✅ On Load
window.onload = () => {
  typeWriter();
  renderAllKuromis();
};
