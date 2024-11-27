import { Cards } from "./createCards.js";


function generateCards() {
        const cardsContainer = document.getElementById("cards-container");

        Cards.home.forEach((card) => {
            const cardElement = document.createElement("div");
            cardElement.className = "card-menu";


            cardElement.innerHTML = `
            <section class="sect-cards">
                <div class="text-cards">
                    <p class="card-title">${card.name}</p>
                </div>
                <div class="card-footer">
                    <button class="shop">
                        <a href="${card.link}" class="pb-2">Ver</a>
                    </button>
                </div>
            </section>
            `;

            cardsContainer.appendChild(cardElement);
        });
}

console.log(Cards);


document.addEventListener("DOMContentLoaded", generateCards);