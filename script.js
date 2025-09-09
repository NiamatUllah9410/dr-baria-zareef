
/* Lightbox Functions */
function openLightbox(src) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = src;
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

/* Scroll Animation */
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});


$('.testi.owl-carousel').owlCarousel({
  items: 2,
  margin:10,
  lazyLoad: true,
  dots:true,
  autoPlay: true,
  autoPlayTimeout: 3000,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:2,
    },
    1000:{
      items:2,
    }
  }
});

