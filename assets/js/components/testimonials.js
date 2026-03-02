function renderTestimonials() {
    const track = document.getElementById("testimonials-track");
    if (!track) return;
  
    track.innerHTML = TESTIMONIALS.map((t) => `
      <div class="testimonial-card">
        <div class="testimonial-card__header">
          <img class="testimonial-card__avatar" src="${t.avatar}" alt="Avatar de ${t.name}" />
          <div>
            <p class="testimonial-card__name">${t.name}</p>
            <p class="testimonial-card__date">${t.date}</p>
          </div>
        </div>
        <div class="testimonial-card__stars">
          ${'<span class="material-symbols-outlined star-icon">star</span>'.repeat(5)}
        </div>
        <p class="testimonial-card__quote">"${t.quote}"</p>
      </div>
    `).join("");
  }
  
  function initTestimonialsCarousel() {
    const track = document.getElementById("testimonials-track");
    if (!track) return;
  
    const cards = track.querySelectorAll(".testimonial-card");
    if (cards.length === 0) return;

    let index = 0;

    // Mostrar solo el primer testimonio al inicio
    cards.forEach((card, i) => {
      card.classList.toggle("is-active", i === 0);
    });

    function showNextTestimonial() {
      // ocultar actual
      cards[index].classList.remove("is-active");
      // siguiente índice
      index = (index + 1) % cards.length;
      // mostrar siguiente
      cards[index].classList.add("is-active");
    }

    // Cambiar cada 10 segundos (10000 ms)
    setInterval(showNextTestimonial, 10000);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderTestimonials();
    initTestimonialsCarousel();
  });