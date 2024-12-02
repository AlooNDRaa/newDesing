document.addEventListener("DOMContentLoaded", () => { //domcontentLoad verifica que el contenido de la pagina este cargado antes de guardar alguna configuracion
    const savedMode = localStorage.getItem("dark-mode");
    const toggleButton = document.getElementById("mode-toggle");
  
    if (savedMode === "enabled") {
      document.body.classList.add("dark-mode");
      toggleButton.textContent = "Modo Claro";
    } else {
      toggleButton.textContent = "Modo Oscuro";
    }
  });
  
  document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const toggleButton = document.getElementById("mode-toggle");
  
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Modo Claro";
      localStorage.setItem("dark-mode", "enabled"); 
    } else {
      toggleButton.textContent = "Modo Oscuro";
      localStorage.setItem("dark-mode", "disabled"); 
    }
  });
  


  // CAMBIAR BOTONES PARA CONTRASTE