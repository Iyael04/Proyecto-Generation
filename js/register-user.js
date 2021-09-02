const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name-business":
      if (expresiones.nombre.test(e.target.value)) {
        document
          .getElementById("grupo__nombre")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__nombre")
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector("#grupo__nombre i")
          .classList.add("fa-check-circle");
        document
          .querySelector("#grupo__nombre i")
          .classList.remove("fa-times-circle");
        document
          .querySelector("#grupo__nombre .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .getElementById("grupo__nombre")
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__nombre")
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector("#grupo__nombre i")
          .classList.add("fa-times-circle");
        document
          .querySelector("#grupo__nombre i")
          .classList.remove("fa-check-circle");
        document
          .querySelector("#grupo__nombre .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;

    case "description":
      if (expresiones.nombre.test(e.target.value)) {
        document
          .getElementById("grupo__business")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__business")
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector("#grupo__business i")
          .classList.add("fa-check-circle");
        document
          .querySelector("#grupo__business i")
          .classList.remove("fa-times-circle");
        document
          .querySelector("#grupo__business .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .getElementById("grupo__business")
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__business")
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector("#grupo__business i")
          .classList.add("fa-times-circle");
        document
          .querySelector("#grupo__business i")
          .classList.remove("fa-check-circle");
        document
          .querySelector("#grupo__business .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;

    case "ubication":
      if (expresiones.telefono.test(e.target.value)) {
        document
          .getElementById("grupo__telefono")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__telefono")
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector("#grupo__telefono i")
          .classList.add("fa-check-circle");
        document
          .querySelector("#grupo__telefono i")
          .classList.remove("fa-times-circle");
        document
          .querySelector("#grupo__telefono .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .getElementById("grupo__telefono")
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__telefono")
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector("#grupo__telefono i")
          .classList.add("fa-times-circle");
        document
          .querySelector("#grupo__telefono i")
          .classList.remove("fa-check-circle");
        document
          .querySelector("#grupo__telefono .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
