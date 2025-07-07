AOS.init();

  function showSlide(index) {
    const slides = document.querySelectorAll('.rule-slide');
    slides.forEach((slide, i) => {
      slide.style.display = (i === index - 1) ? 'block' : 'none';
    });
  }

  // Show first slide by default
  showSlide(1);