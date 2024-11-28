import { Cards } from "./createCards.js";

function showCategoryProducts(categoryId) {
    const categoryName = getCategoryNameById(categoryId); 
    const categoryProducts = Cards[categoryName.toLowerCase()]; 

    const productsContainer = document.getElementById("products-container");

    categoryProducts.forEach(product => {
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
    categoryTitle.textContent = `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`;
}

function getCategoryNameById(id) {
    switch (id) {
        case "1": return "moda";
        case "2": return "accesorios";
        case "3": return "joyas";
        case "4": return "belleza";
        case "5": return "hogar";
        case "6": return "ofertas";
        default: return "home"; 
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get("categoryId");

    console.log(categoryId); 
   


    if (categoryId) {
        showCategoryProducts(categoryId);
    } else {
        console.log("No category ID found in URL");  
    }
});
