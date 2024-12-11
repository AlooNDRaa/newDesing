const mensajesErrores = {
    nombre: "El nombre no puede estar vacío.",
    email: "El email debe ser válido (incluye '@' y '.').",
    mensaje: "El mensaje no puede estar vacío."
};

const limpiarErrores = (form) => {
    const errores = form.querySelectorAll('.error-msg');
    errores.forEach(error => error.remove());
};

const validarCampo = (campo, mensaje) => {
    if (campo.name === "email") {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value) ? "" : mensaje;
    } else if (campo.name === "nombre" || campo.name === "mensaje") {
        return campo.value.trim() !== "" ? "" : mensaje;
    }
    return "";
};

const validarFormulario = (form) => {
    const errores = [];
    const inputs = Array.from(form.querySelectorAll('input[name], textarea[name]'));

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
            campo.insertAdjacentElement('afterend', errorLabel); 
        }

        errorLabel.innerText = error.mensaje;
    });
};

const agregarValidacionEnTiempoReal = (form) => {
    const inputs = form.querySelectorAll('input[name], textarea[name]');
    const botonSubmit = form.querySelector('button[type="submit"]');

    const actualizarEstadoBoton = () => {
        const errores = validarFormulario(form);
        botonSubmit.disabled = errores.length > 0; 
    };

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            limpiarErrores(form);
            const errores = validarFormulario(form);
            mostrarErrores(errores, form);
            actualizarEstadoBoton();
        });
    });

    actualizarEstadoBoton();
};

function renderFormularioContacto() {
    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = `
    <h3 class="h3-form">Formulario de Contacto</h3>
        <div class="div-hijo-form">
            <form id="contact-form" action="https://formspree.io/f/xzzbqyaw" method="post">
                <div class="container-contact">
                    <label class="label-form" for="nombre">Nombre*</label>
                    <input type="text" placeholder="Ingrese su nombre" name="nombre" class="nombre-form">

                    <label class="label-form" for="email">Email*</label>
                    <input type="text" placeholder="Ingrese su email" name="email" class="email-form">

                    <label class="label-form" for="mensaje">Mensaje*</label>
                    <textarea name="mensaje" placeholder="Escriba su mensaje aquí" class="mensaje-form"></textarea>

                    <button class="button-inset" type="submit" disabled>Enviar mensaje</button>
                </div>
            </form>
        </div>
    `;

    const form = document.getElementById('contact-form');
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
}

renderFormularioContacto();
