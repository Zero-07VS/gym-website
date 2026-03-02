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
  
  document.addEventListener("DOMContentLoaded", renderTestimonials);