document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("accessibility-mode");
    if (savedMode) {
      document.body.classList.add(savedMode);
    }
  
    const daltonismButtons = document.querySelectorAll(".daltonism-toggle");
    daltonismButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const mode = button.getAttribute("data-mode");
        document.body.className = ""; 
        document.body.classList.add(`body-${mode}`);
        localStorage.setItem("accessibility-mode", `body-${mode}`);
      });
    });
  
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
  