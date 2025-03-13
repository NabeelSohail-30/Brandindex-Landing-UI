document.addEventListener("DOMContentLoaded", () => {
    const carouselContent = document.querySelector(".carousel-content");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const carouselItem = document.querySelector(".carousel-item");
  
    const cardWidth = carouselItem.offsetWidth + 20; // Card width + gap
  
    leftArrow.addEventListener("click", () => {
      carouselContent.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });
  
    rightArrow.addEventListener("click", () => {
      carouselContent.scrollBy({ left: cardWidth, behavior: "smooth" });
    });
  });
  
  