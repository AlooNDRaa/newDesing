document.getElementById("header").innerHTML = `
<nav class="menu__wrapper">
  <div class="menu__bar">
    <a href="../index.html">
      <h1 class="title-home">MystiqueShop</h1>
    </a>
    <input type="search" placeholder="Busca productos, marcas y más" id="Buscador" />
    <ul class="navigation hide">
        <input type="search" placeholder="Busca productos, marcas y más" id="Buscador-h" />
      <li>
        <button>
          Productos
          <svg opacity="0.5" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
          </svg>
        </button>
        <div class="dropdown">
          <ul class="list-items-with-description">
            <li><a href="../html/cards.html?categoryId=1"><h3>Moda</h3></a></li>
            <li><a href="../html/cards.html?categoryId=3"><h3>Joyería</h3></a></li>
            <li><a href="../html/cards.html?categoryId=2"><h3>Accesorios</h3></a></li>
            <li><a href="../html/cards.html?categoryId=4"><h3>Cuidado Facial</h3></a></li>
            <li><a href="../html/cards.html?categoryId=5"><h3>Hogar</h3></a></li>
            <li><a href="../html/cards.html?categoryId=6"><h3>Ofertas</h3></a></li>
            <li><a href="../html/cards.html?categoryId=7"><h3>Obsequios</h3></a></li>
            <li><a href="../html/404.html"><h3>Error</h3></a></li>
          </ul>
        </div>
      </li>
      <li>
        <button>
          Centro de ayuda
          <svg opacity="0.5" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
          </svg>
        </button>
        <div class="dropdown">
          <ul class="list-menu-items">
            <li><a href="../html/services.html?sectionId=1">Devoluciones</a></li>
            <li><a href="../html/services.html?sectionId=2">Pagos</a></li>
            <li><a href="../html/services.html?sectionId=3">Envios</a></li>
            <li><a href="../html/services.html?sectionId=4">Correspondencia sospechosa</a></li>
            <li><a href="../html/services.html?sectionId=5">Políticas de seguridad</a></li>
            <li><a href="../html/contacto.html">Contacto</a></li>
          </ul>
        </div>
      </li>
      <li>
        <button>
          Accesibilidad
          <svg opacity="0.5" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
          </svg>
        </button>
        <div class="dropdown">
          <h3>Escoja la mejor opción:</h3>
          <ul class="list-menu-items">
            <li><button id="mode-toggle" class="mode-toggle">Modo Oscuro</button></li>
            <li class="accesibility">
              <a title="Daltonismo"> Dislexia</a>
              <button id="dislexia-toggle" class="mode-toggle">Dislexia</button>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="../html/cart.html" title="cart">
          <span class="material-symbols-outlined">shopping_cart</span>
        </a>
      </li>
      <div class="action-buttons">
        <a href="../html/registros.html" title="Sign in" class="secondary hide">Sign in</a>
        <a href="#sign-in" title="Sign in" class="secondary hide">Sign out</a>
      </div>
    </ul>
  </div>
  <button class="burger-menu">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  </button>
</nav>
`;

const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        navigation.classList.add('mobile-hide');
    }
});

burgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('mobile-hide');
    navigation.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navigation.classList.remove('mobile-hide', 'show');
    } else {
        navigation.classList.add('mobile-hide');
    }
});
