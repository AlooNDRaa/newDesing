document.getElementById("header").innerHTML = `
<nav class="menu__wrapper">
<div class="menu__bar">
    <a href="../index.html">
       <h1 class="title-home">MystiqueShop</h1>
    </a>
    <input type="search" placeholder="Busca productos, marcas y mas" id="Buscador" />
    <ul class="navigation hide">
        <li>
            <button>
                Productos
                <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div class="dropdown">
                <ul class="list-items-with-description">
                  <ul>
                    <li>
                        <div class="item-title">
                            <a href="../html/cards.html?categoryId=1">
                                <h3>Moda</h3>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <a href="../html/cards.html?categoryId=3">
                                <h3>Joyería</h3>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <a href="../html/cards.html?categoryId=2">
                                <h3>Accesorios</h3>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <a href="../html/cards.html?categoryId=4">
                                <h3>Cuidado Facial</h3>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <a href="../html/cards.html?categoryId=5">
                                <h3>Hogar</h3>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <a href="../html/cards.html?categoryId=6">
                                <h3>Ofertas</h3>
                            </a>
                        </div>
                    </li>
                </ul>

                </ul>
            </div>
        </li>
        <li>
            <button>
                Asistencia
                <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div class="dropdown">
                <h3>Para:</h3>
                <ul class="list-menu-items">
                    <li>
                        <a href="../html/services.html?sectionId=1" title="Enterprise">
                            Devoluciones
                        </a>
                    </li>
                    <li>
                        <a href="../html/services.html?sectionId=2" title="Teams">
                            Pagos
                        </a>
                    </li>
                    <li>
                        <a href="../html/services.html?sectionId=3" title="Startups">
                            Envios
                        </a>
                    </li>
                    <li>
                        <a href="../html/services.html?sectionId=4" title="Education">
                            Correspondencia sospechosa
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <button>
                Acesibilidad
                <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div class="dropdown">
                <h3>Escoja la mejor opcion:</h3>
                <ul class="list-menu-items">
                    <li>
                     <button id="mode-toggle" class="mode-toggle">Modo Oscuro</button>
                    </li>
                    <li>
                        <a title="Collections">
                            Daltonismo: 
                        </a>
                        <button id="mode-toggle" class="mode-toggle">D1</button>
                    </li>
                    <li>
                        <a title="Collections">
                            Dislexia
                        </a>
                        <button id="mode-toggle" class="mode-toggle">D1</button>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <a
                href="#pricing"
                title="cart"
            >
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
            </a>
        </li>
    </ul>
</div>
<div class="action-buttons">
    <a href="../html/registros.html" title="Sign in" class="secondary hide">
        Sign in
    </a>
     <a href="#sign-in" title="Sign in" class="secondary hide">
        Sign out
    </a>
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
`

document.getElementById("footer").innerHTML = `
<footer>
<div class="footer">
<div class="row">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contactanos</a></li>
<li><a href="#">Servicios</a></li>
<li><a href="#">Seguridad</a></li>
<li><a href="#">Accesibilidad</a></li>
</ul>
</div>

<div class="row">
Alondra Gadea Copyright © 2024 Academy - todos los derechos reservados  
</div>
</div>
</footer>
  `

