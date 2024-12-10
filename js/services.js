document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("sectionId");

  fetch("../json/servicesData.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar el JSON");
      return response.json();
    })
    .then((data) => {
      if (categoryId) {
        showCategoryServices(categoryId, data);
      } else {
        console.log("No category ID found in URL");
      }
    })
    .catch((error) => console.error(error));
});

function showCategoryServices(categoryId, servicesData) {
  const categoryName = getCategoryNameById(categoryId);
  const categoryServices = servicesData[categoryName.toLowerCase()];

  const servicesContainer = document.getElementById("services-container");

  if (!categoryServices || categoryServices.length === 0) {
    servicesContainer.innerHTML = `
    <div class="services-require">
      <p class="error-p-services">No hay servicios disponibles para esta categoría, si desea un aviso de los nuevos productos ingrese su email</p>
      <div class="send-email-services"> 
          <input type="text" name"email" placeholder="Ingresa tu email">
          <button class="send-email">Pedir</button>
      </div>
      </div>
    `;
    return;
  }

  servicesContainer.innerHTML = "";
  categoryServices.forEach((service) => {
    const serviceElement = document.createElement("div");
    serviceElement.className = "service-banner";
    serviceElement.innerHTML = `
      <div class="service-banner" data-id="${service.id}">
        <h3>${service.name}</h3>
        <p>${service.descripcion}</p>
        <div class="buttons">
          ${
            categoryName.toLowerCase() === "devoluciones"
              ? `<button class="request-service">Solicitar</button>`
              : ""
          }
          <button class="more-info-service">Más información</button>
        </div>
      </div>
    `;
    servicesContainer.appendChild(serviceElement);
  });

  const categoryTitle = document.getElementById("category-title-services");
  categoryTitle.textContent = `${categoryName.charAt(0).toUpperCase()}${categoryName.slice(1)}`;
}


function getCategoryNameById(id) {
  switch (id) {
    case "1":
      return "devoluciones";
    case "2":
      return "pagos";
    case "3":
      return "envios";
    case "4":
      return "correspondencia";
    case "5":
      return "politicas"
    default:
      return "home";
  }
}
