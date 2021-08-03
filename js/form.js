const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,8}$/, // 4 a 8 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/ // 7 a 10 numeros.
}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "usuario":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__usuario i').classList.add('fa-check-circle');
				document.querySelector('#grupo__usuario i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__usuario i').classList.add('fa-times-circle');
				document.querySelector('#grupo__usuario i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;

		case "nombre":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
				document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-times-circle');
				document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;

		case "apellido":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__apellido').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__apellido').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__apellido i').classList.add('fa-check-circle');
				document.querySelector('#grupo__apellido i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__apellido .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__apellido').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__apellido').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__apellido i').classList.add('fa-times-circle');
				document.querySelector('#grupo__apellido i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__apellido .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;

		
		case "password":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__password i').classList.add('fa-check-circle');
				document.querySelector('#grupo__password i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__password i').classList.add('fa-times-circle');
				document.querySelector('#grupo__password i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;

		case "email":
			if(expresiones.email.test(e.target.value)){
				document.getElementById('grupo__email').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__email').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__email i').classList.add('fa-check-circle');
				document.querySelector('#grupo__email i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__email .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__email').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__email').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__email i').classList.add('fa-times-circle');
				document.querySelector('#grupo__email i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__email .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;

		case "telefono":
			if(expresiones.telefono.test(e.target.value)){
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.add('fa-check-circle');
				document.querySelector('#grupo__telefono i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.add('fa-times-circle');
				document.querySelector('#grupo__telefono i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});
