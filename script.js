let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = slider.children.length;
const dotsContainer = document.getElementById("dots");

// Create dots
for (let i = 0; i < slides; i++) {
  const dot = document.createElement("button");
  dot.className = `w-2 h-2 rounded-full transition-colors duration-200 ${
    i === 0 ? "bg-white" : "bg-white/50"
  }`;
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  // Update dots
  Array.from(dotsContainer.children).forEach((dot, index) => {
    dot.className = `w-2 h-2 rounded-full transition-colors duration-200 ${
      index === currentIndex ? "bg-white" : "bg-white/50"
    }`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides) % slides;
  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Auto-slide
setInterval(nextSlide, 5000);
