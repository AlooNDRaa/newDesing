const mensajesErrores = {
    email: "El email debe ser válido (incluye '@' y '.').",
    psw: "La contraseña no puede estar vacía.",
};

const limpiarErrores = (form) => {
    const errores = form.querySelectorAll('.error-msg');
    errores.forEach(error => error.remove());
};

const validarCampo = (campo, mensaje) => {
    if (campo.name === "email") {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value) ? "" : mensaje;
    } else if (campo.name === "psw") {
        return campo.value.trim() !== "" ? "" : mensaje;
    }
    return "";
};

const validarFormulario = (form) => {
    const errores = [];
    const inputs = Array.from(form.querySelectorAll('input[name]'));

    inputs.forEach(input => {
        const error = validarCampo(input, mensajesErrores[input.name]);
        if (error) {
            errores.push({ campo: input.name, mensaje: error });
        }
    });

    return errores;
};

const mostrarErrores = (errores, form) => {
    errores.forEach(error => {
        const campo = form.querySelector(`[name="${error.campo}"]`);
        let errorLabel = campo.nextElementSibling;

        if (!errorLabel || !errorLabel.classList.contains('error-msg')) {
            errorLabel = document.createElement('span');
            errorLabel.className = 'error-msg';
            campo.insertAdjacentElement('afterend', errorLabel); // Coloca el mensaje justo después del input
        }

        errorLabel.innerText = error.mensaje;
    });
};

const agregarValidacionEnTiempoReal = (form) => {
    const inputs = form.querySelectorAll('input[name]');
    const botonSubmit = form.querySelector('button[type="submit"]');

    const actualizarEstadoBoton = () => {
        const errores = validarFormulario(form);
        botonSubmit.disabled = errores.length > 0; // Habilita si no hay errores
    };

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            limpiarErrores(form);
            const errores = validarFormulario(form);
            mostrarErrores(errores, form);
            actualizarEstadoBoton();
        });
    });

    // Inicializa el estado del botón al cargar
    actualizarEstadoBoton();
};

function renderLoginForm() {
    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = `
        <div class="div-hijo-form">
            <h3 class="h3-form">Inicia Sesión</h3>
            <form id="login-form" action="/js/login.js" method="post">
                <div class="container">    
                    <label class="label-form" for="email">Email*</label>
                    <input type="text" placeholder="Ingrese su email" name="email" class="email-form">
                    
                    <label class="label-form" for="psw">Contraseña*</label>
                    <input type="password" placeholder="Ingrese su contraseña" name="psw">
                    
                    <div class="div-forms">
                        <div>
                            <label class="custom-checkbox">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                Recordarme
                            </label>
                        </div>
                        <div>
                            <p class="p-passForgot">
                                ¿Olvidó su <a href="./restorePasswordform.html" class="s-classP"> Contraseña? </a>
                            </p>
                        </div>
                    </div>
                    
                    <button class="button-inset" type="submit" disabled>Iniciar sesión</button>
                    
                    <p class="seguir">O inicie con: </p>
                    <div class="form-loginforms">
                        <a href="#" class="register-button">
                            <span class="material-icons">account_circle</span> Google
                        </a>
                        <a href="#" class="register-button">
                            <span class="material-icons">account_circle</span> Facebook
                        </a>
                    </div>
                    
                    <p class="login--s">
                        No tiene una cuenta? <a class="login--sS" id="to-register" href="#">Regístrese</a>
                    </p>
                </div>
            </form>
        </div>
    `;

    const form = document.getElementById('login-form');
    agregarValidacionEnTiempoReal(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        limpiarErrores(form);

        const errores = validarFormulario(form);

        if (errores.length > 0) {
            mostrarErrores(errores, form);
        } else {
            console.log("Formulario válido. Enviando datos...");
            form.submit();
        }
    });

    document.getElementById('to-register').addEventListener('click', (event) => {
        event.preventDefault();
        renderRegisterForm();
    });
}

function renderRegisterForm() {
    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = `
        <div class="div-hijo-form">
            <h3 class="h3-form">Registro</h3>
            <form id="register-form" action="/js/login.js" method="post">
                <div class="container">
                    <label class="label-form" for="email">Email*</label>
                    <input type="text" placeholder="Ingrese su email" name="email" class="email-form">
                    
                    <label class="label-form" for="psw">Contraseña*</label>
                    <input type="password" placeholder="Ingrese su contraseña" name="psw">
                    
                    <div class="div-forms">
                        <div>
                            <label class="custom-checkbox">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                Recordarme
                            </label>
                        </div>
                    </div>
                    
                    <button class="button-inset" type="submit" disabled>Regístrate</button>
                    
                    <p class="seguir">O continúe con: </p>
                    <div class="form-loginforms">
                        <a href="#" class="register-button">
                            <span class="material-icons">account_circle</span> Google
                        </a>
                        <a href="#" class="register-button">
                            <span class="material-icons">account_circle</span> Facebook
                        </a>
                    </div>
                    
                    <p class="login--s">
                        Ya tiene una cuenta? <a class="login--sS" id="to-login" href="#">Inicia sesión</a>
                    </p>
                </div>
            </form>
        </div>
    `;

    const form = document.getElementById('register-form');
    agregarValidacionEnTiempoReal(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        limpiarErrores(form);

        const errores = validarFormulario(form);

        if (errores.length > 0) {
            mostrarErrores(errores, form);
        } else {
            console.log("Formulario válido. Enviando datos...");
            form.submit();
        }
    });

    document.getElementById('to-login').addEventListener('click', (event) => {
        event.preventDefault();
        renderLoginForm();
    });
}

renderLoginForm();
