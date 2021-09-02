const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nombrecomercio: /^[a-zA-Z0-9À-ÿ\s\_\-]{4,40}$/, // Letras, numeros, acentos guion y guion_bajo
	password: /^.{6,12}$/, // 6 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/, // 7 a 10 numeros.
	localizacion: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
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

		case "nombre-comercio":
			if(expresiones.nombrecomercio.test(e.target.value)){
				document.getElementById('grupo__nombre-comercio').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre-comercio').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre-comercio i').classList.add('fa-check-circle');
				document.querySelector('#grupo__nombre-comercio i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__nombre-comercio .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__nombre-comercio').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre-comercio').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre-comercio i').classList.add('fa-times-circle');
				document.querySelector('#grupo__nombre-comercio i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__nombre-comercio .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;
		case "titular":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__titular').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__titular').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__titular i').classList.add('fa-check-circle');
				document.querySelector('#grupo__titular i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__titular .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__titular').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__titular').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__titular i').classList.add('fa-times-circle');
				document.querySelector('#grupo__titular i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__titular .formulario__input-error').classList.add('formulario__input-error-activo');
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
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
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



		case "nombre-usuario":
			if(expresiones.nombrecomercio.test(e.target.value)){
				document.getElementById('grupo__nombre-usuario').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre-usuario').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre-usuario i').classList.add('fa-check-circle');
				document.querySelector('#grupo__nombre-usuario i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__nombre-usuario .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__nombre-usuario').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre-usuario').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre-usuario i').classList.add('fa-times-circle');
				document.querySelector('#grupo__nombre-usuario i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__nombre-usuario .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;

		case "apellidos-usuario":
			if(expresiones.nombrecomercio.test(e.target.value)){
				document.getElementById('grupo__apellidos-usuario').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__apellidos-usuario').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__apellidos-usuario i').classList.add('fa-check-circle');
				document.querySelector('#grupo__apellidos-usuario i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__apellidos-usuario .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__apellidos-usuario').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__apellidos-usuario').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__apellidos-usuario i').classList.add('fa-times-circle');
				document.querySelector('#grupo__apellidos-usuario i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__apellidos-usuario .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;

		case "password-usuario":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('grupo__password-usuario').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__password-usuario').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__password-usuario i').classList.add('fa-check-circle');
				document.querySelector('#grupo__password-usuario i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__password-usuario .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__password-usuario').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__password-usuario').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__password-usuario i').classList.add('fa-times-circle');
				document.querySelector('#grupo__password-usuario i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__password-usuario .formulario__input-error').classList.add('formulario__input-error-activo');
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
		case "localizacion":
			if(expresiones.localizacion.test(e.target.value)){
				document.getElementById('grupo__localizacion').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__localizacion').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__localizacion i').classList.add('fa-check-circle');
				document.querySelector('#grupo__localizacion i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__localizacion .formulario__input-error').classList.remove('formulario__input-error-activo');

				
			}else{
				document.getElementById('grupo__localizacion').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__localizacion').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__localizacion i').classList.add('fa-times-circle');
				document.querySelector('#grupo__localizacion i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__localizacion .formulario__input-error').classList.add('formulario__input-error-activo');
			
				
			}
		break;
	}
}

const validarPassword2 = () =>{
	const inputPassword2 = document.getElementById('password2');
	const inputPassword1 = document.getElementById('password');
	

if (inputPassword1.value !== inputPassword2.value){
				document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__password2 i').classList.add('fa-times-circle');
				document.querySelector('#grupo__password2 i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');

} else {
				document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__password2 i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__password2 i').classList.add('fa-check-circle');
				document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');

}

}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


//Registro vendedor (seller)

// Example POST method implementation:
async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
	  method: 'POST', // *GET, POST, PUT, DELETE, etc.
	  mode: 'cors', // no-cors, *cors, same-origin
	  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	  credentials: 'same-origin', // include, *same-origin, omit
	  headers: {
		'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded',
	  },
	  body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	console.log(response);
	return response; // parses JSON response into native JavaScript objects
}
  console.log("iudasiopfjnsdionj")

  
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
	let url = "http://localhost:8080/api/aceradecomida_seller/";
	let name = document.getElementById('nombre').value;
	let password = document.getElementById('password').value;
	let email = document.getElementById('email').value;
	let titular = document.getElementById('titular').value;
	let telefono = document.getElementById('telefono').value;
	let localizacion = document.getElementById('localizacion').value;
	console.log(name,password,email,titular,telefono,localizacion);
	const newseller={
		username : name,
		email : email, 
		password : password,
		titular : titular,
		telefono : telefono,
		localizacion : localizacion
	};
	postData(url, newseller)
	.then(data => {
		console.log(data);
		
		alerta(); 
		function alerta() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				didOpen: (toast) => {
				  toast.addEventListener('mouseenter', Swal.stopTimer)
				  toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			  })
			  if (data.status===200){		
				  Toast.fire({
					  icon: 'success',
					  title: 'Comercio agregado'
					  
					});
					let name = document.getElementById('nombre').value="";
					let password = document.getElementById('password').value="";
					let email = document.getElementById('email').value="";
					let titular = document.getElementById('titular').value="";
					let telefono = document.getElementById('telefono').value="";
					let localizacion = document.getElementById('localizacion').value="";
				}else{
					let email = document.getElementById('email').value="";
					Toast.fire({
						icon: 'error',
						title: 'Correo ya existente'
						
					  });
				}				
		}
		
	});

});