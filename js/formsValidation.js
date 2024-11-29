function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6; 
}

function validateForm(form) {
    let errors = [];
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="psw"]').value;

    if (!validateEmail(email)) {
        errors.push({ field: 'email', message: 'Por favor, ingresa un email válido.' });
    }
    if (!validatePassword(password)) {
        errors.push({ field: 'psw', message: 'La contraseña debe tener al menos 6 caracteres.' });
    }

    return errors;
}

function showErrors(errors, form) {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    errors.forEach(error => {
        const inputElement = form.querySelector(`input[name="${error.field}"]`);
        if (inputElement) {
            const errorPara = document.createElement('p');
            errorPara.classList.add('error-message');
            errorPara.textContent = error.message;
            inputElement.parentNode.insertBefore(errorPara, inputElement.nextSibling);
        }
    });
}

export { validateForm, showErrors };
