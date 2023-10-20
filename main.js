document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const carouselSlide = document.querySelector(".carousel-slide");
  
    let counter = 0;
  
    nextButton.addEventListener("click", () => {
      if (counter < 2) {
        counter++;
      } else {
        counter = 0;
      }
      updateCarousel();
    });
  
    prevButton.addEventListener("click", () => {
      if (counter > 0) {
        counter--;
      } else {
        counter = 2;
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      const size = carouselSlide.clientWidth;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
  
    // Adiciona funcionalidade de transição automática
    setInterval(() => {
      if (counter < 2) {
        counter++;
      } else {
        counter = 0;
      }
      updateCarousel();
    }, 5000); // Muda de slide a cada 5 segundos
  });
  
  