function renderPlans() {
    const grid = document.getElementById("plans-grid");
    if (!grid) return;
  
    grid.innerHTML = PLANS.map((plan) => {
      const featuredClass = plan.featured ? "plan-card plan-card--featured" : "plan-card";
      const btnClass = plan.featured ? "plan-card__btn plan-card__btn--filled" : "plan-card__btn plan-card__btn--outline";
      const badge = plan.featured ? `<div class="plan-card__badge">${plan.badgeText}</div>` : "";
      const featureItems = plan.features.map((f) => `
        <li class="plan-card__feature ${!f.enabled ? "plan-card__feature--disabled" : ""}">
          <span class="material-symbols-outlined plan-card__feature-icon">${f.enabled ? "check" : "close"}</span>
          ${f.text}
        </li>
      `).join("");
  
      return `
        <div class="${featuredClass}">
          ${badge}
          <h4 class="plan-card__name">${plan.name}</h4>
          <div class="plan-card__price-wrapper">
            <span class="plan-card__price">${plan.price}</span>
            <span class="plan-card__period">/mes</span>
          </div>
          <ul class="plan-card__features">${featureItems}</ul>
          <button class="${btnClass}">Elegir Plan</button>
        </div>
      `;
    }).join("");
  }
  
  document.addEventListener("DOMContentLoaded", renderPlans);