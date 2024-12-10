import { Cards } from "./createCards.js";

function showCategoryProducts(categoryId) {
  const categoryName = getCategoryNameById(categoryId);
  const categoryProducts = Cards[categoryName.toLowerCase()];

  const productsContainer = document.getElementById("products-container");
  const dontShowBackground = document.getElementById("text-bacground");

  if (!categoryProducts || categoryProducts.length === 0) {
    dontShowBackground.style.display = "none";

    productsContainer.innerHTML = `
        <div class="services-require">
            <p class="error-p-services">No hay productos disponibles para esta categoría, si desea un aviso de los nuevos productos ingrese su email</p>
            <span>Recuerde revisar que el remitente tenga nuestro código seguro antes de hacer alguna operación.</span>
            <div class="send-email-services"> 
                <form
                    action="https://formspree.io/f/xkgnavkw"
                    method="POST"
                >
                    <input type="text" name="email" required placeholder="Ingresa tu email">
                    <button type="submit" class="send-email">Pedir</button>
                </form>
            </div>
        </div>
        `;

    setupFormValidation();
    return;
  }

  categoryProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product-card";
    productElement.innerHTML = `
         <div class="product-card">
            <div class="img-sep"> 
                <img class="p-cards-img" src="${product.img}" alt="${product.alt}">
            </div>
            <div class="content-p-cards"> 
                <h3>${product.name}</h3>
                <p>${product.descripcion}</p>
                <div class="buttons">
                    <button class="comp-card">
                        Comprar
                    </button>
                    <button class="ver-mas-card">
                        Ver más
                    </button>
                </div>
            </div>
        </div>
        `;
    productsContainer.appendChild(productElement);
  });

  const categoryTitle = document.getElementById("category-title");
  categoryTitle.textContent = `${
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  }`;
}

function getCategoryNameById(id) {
  switch (id) {
    case "1":
      return "moda";
    case "2":
      return "accesorios";
    case "3":
      return "joyas";
    case "4":
      return "belleza";
    case "5":
      return "hogar";
    case "6":
      return "ofertas";
    case "7":
      return "obsequios";
    default:
      return "home";
  }
}

function setupFormValidation() {
  const form = document.querySelector(".send-email-services form");
  const emailInput = form.querySelector("input[name='email']");

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = "Por favor, ingrese un email válido.";
  errorMessage.style.color = "red";
  errorMessage.style.display = "none";
  form.appendChild(errorMessage);

  form.addEventListener("submit", (event) => {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue || !emailRegex.test(emailValue)) {
      event.preventDefault(); 
      errorMessage.style.display = "block"; 
    } else {
      errorMessage.style.display = "none"; 
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("categoryId");

  if (categoryId) {
    showCategoryProducts(categoryId);
  } else {
    console.log("No category ID found in URL");
  }
});
