import { validateForm, showErrors } from './formsValidation.js';

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
                    <input type="password" placeholder="Ingrese su contraseña" name="psw" >
                    
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
                    
                    <button class="button-inset" type="submit">Iniciar sesión</button>
                    
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

    document.getElementById('to-register').addEventListener('click', (event) => {
        event.preventDefault();  
        renderRegisterForm();  
    });

    const form = document.getElementById('login-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const errors = validateForm(form);
        
        if (errors.length > 0) {
            showErrors(errors, form);
        } else {
            console.log("Formulario válido. Enviando datos...");
            form.submit();  
        }
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
                    <input type="password" placeholder="Ingrese su contraseña" name="psw" >
                    
                    <div class="div-forms">
                        <div>
                            <label class="custom-checkbox">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                Recordarme
                            </label>
                        </div>
                    </div>
                    
                    <button class="button-inset" type="submit">Regístrate</button>
                    
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

    document.getElementById('to-login').addEventListener('click', (event) => {
        event.preventDefault();  
        renderLoginForm();  


        const form = document.getElementById('login-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const errors = validateForm(form);
            
            if (errors.length > 0) {
                showErrors(errors, form);
            } else {
                console.log("Formulario válido. Enviando datos...");
                form.submit();  
            }
        });
    });
}

renderLoginForm();  
renderRegisterForm();
