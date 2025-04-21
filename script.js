const text = "Hello World, I'm Anushka!";
let i = 0;

function typeWriter() {
  const target = document.getElementById("typewriter");
  target.innerHTML = "";  // Clear previous text
  i = 0;  // Reset counter

  function typingEffect() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typingEffect, 100);
    }
  }

  typingEffect();  // Start typing
}

// Call typewriter once on load
window.onload = () => {
  typeWriter();  // Trigger typing animation when page loads
  renderAllKuromis();
};

// Re-trigger the typewriter effect every 15 seconds
setInterval(() => {
  typeWriter();
}, 15000);

function fillKuromis(containerId, imageSrc) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear previous Kuromis on resize

  const screenHeight = window.innerHeight;
  const kuromiHeight = 60;
  const count = Math.ceil((screenHeight * 2) / kuromiHeight); // 2x screen height

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
