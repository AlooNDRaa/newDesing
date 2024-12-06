document.addEventListener("DOMContentLoaded", () => {
  // Cargar configuraciones guardadas
  const savedDarkMode = localStorage.getItem("dark-mode");
  const savedAccessibilityMode = localStorage.getItem("accessibility-mode");

  // Aplicar modo oscuro si estaba activado
  if (savedDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
    document.getElementById("mode-toggle").textContent = "Modo Claro";
  }

  // Aplicar modo de accesibilidad guardado
  if (savedAccessibilityMode) {
    document.body.classList.add(savedAccessibilityMode);
  }

  // Configurar botón de modo oscuro
  const darkModeButton = document.getElementById("mode-toggle");
  darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkModeButton.textContent = "Modo Claro";
      localStorage.setItem("dark-mode", "enabled");
    } else {
      darkModeButton.textContent = "Modo Oscuro";
      localStorage.setItem("dark-mode", "disabled");
    }
  });

  // Configurar botones de daltonismo
  const daltonismButtons = document.querySelectorAll(".daltonism-toggle");
  daltonismButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.getAttribute("data-mode");

      // Eliminar todas las clases relacionadas con daltonismo
      const daltonismModes = ["body-acromatopsia", "body-dicromatismo", "body-deuteranomaly", "body-protanomaly", "body-tritanomaly"];
      document.body.classList.remove(...daltonismModes);

      // Activar la clase correspondiente
      document.body.classList.add(`body-${mode}`);
      localStorage.setItem("accessibility-mode", `body-${mode}`);
    });
  });

  // Configurar botón de dislexia
  const dislexiaButton = document.getElementById("dislexia-toggle");
  dislexiaButton.addEventListener("click", () => {
    const isActive = document.body.classList.toggle("body-dislexia");
    if (isActive) {
      localStorage.setItem("accessibility-mode", "body-dislexia");
    } else {
      localStorage.removeItem("accessibility-mode");
    }
  });
});
