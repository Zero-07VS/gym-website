function renderServices() {
    const grid = document.getElementById("services-grid");
    if (!grid) return;
  
    grid.innerHTML = SERVICES.map((service) => `
      <div class="service-card group">
        <div class="service-card__icon-wrapper">
          <span class="material-symbols-outlined service-card__icon">${service.icon}</span>
        </div>
        <h4 class="service-card__title">${service.title}</h4>
        <p class="service-card__description">${service.description}</p>
      </div>
    `).join("");
  }
  
  document.addEventListener("DOMContentLoaded", renderServices);