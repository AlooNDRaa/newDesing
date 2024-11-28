document.getElementById("header").innerHTML = `
<nav class="menu__wrapper">
<div class="menu__bar">
    <a href="../index.html">
       <h1>MystiqueShop</h1>
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
                    <li>                 
                     <div class="item-title">
                         <h3>Moda</h3>
                    </div>
                    </li>

                    <li>
                        <div class="item-title">
                            <h3>Joyeria</h3>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <h3>Accesorios</h3>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <h3>Cuidado Facial</h3>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <h3>Hogar</h3>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            <h3>Ofertas</h3>
                        </div>
                    </li>
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
                        <a href="#enterprise" title="Enterprise">
                            Devoluciones
                        </a>
                    </li>
                    <li>
                        <a href="#teams" title="Teams">
                            Pagos
                        </a>
                    </li>
                    <li>
                        <a href="#startups" title="Startups">
                            Envios
                        </a>
                    </li>
                    <li>
                        <a href="#education" title="Education">
                            Correspondencia sospechosa
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <button>
                Gestiones
                <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div class="dropdown">
                <h3>Gestiones</h3>
                <ul class="list-menu-items">
                    <li>
                        <a href="#topics" title="Topics">
                            Mis compras
                        </a>
                    </li>
                    <li>
                        <a href="#trending" title="Trending">
                            Envios
                        </a>
                    </li>
                    <li>
                        <a href="#collections" title="Collections">
                            Cancelaciones
                        </a>
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
    <a href="#sign-in" title="Sign in" class="secondary hide">
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
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
</ul>
</div>

<div class="row">
Alondra Gadea Copyright © 2024 Academy - All rights reserved  
</div>
</div>
</footer>
  `

