import { servicesData } from "./servicesData.js";

function showCategoryServices(categoryId) {
  const categoryName = getCategoryNameById(categoryId); 
  const categoryServices = servicesData[categoryName.toLowerCase()];

  const servicesContainer = document.getElementById("services-container");

if (!categoryServices || categoryServices.length === 0) {
  servicesContainer.innerHTML = `<p>No hay servicios disponibles para esta categoría.</p>`;
  return;
}


categoryServices.forEach(service => {
    const serviceElement = document.createElement("div");
    serviceElement.className = "service-banner";
    serviceElement.innerHTML = `
      <div class="service-banner" data-id="${service.id}">
        <h3>${service.name}</h3>
        <p>${service.descripcion}</p>
        <div class="buttons">
          ${categoryName.toLowerCase() === "devoluciones" ? `
            <button class="request-service">
              Solicitar
            </button>
          ` : ''}
          <button class="more-info-service">
            Más información
          </button>
        </div>
      </div>
    `;
    servicesContainer.appendChild(serviceElement);
  });
  
  

  const categoryTitle = document.getElementById("category-title-services");
  categoryTitle.textContent = `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`;
}

function getCategoryNameById(id) {
  switch (id) {
    case "1": return "devoluciones";
    case "2": return "pagos";
    case "3": return "envios";
    case "4": return "correspondencia";
    default: return "home"; 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("sectionId");

  if (categoryId) {
    showCategoryServices(categoryId);
  } else {
    console.log("No category ID found in URL");
  }
});
