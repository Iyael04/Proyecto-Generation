const form = document.getElementById('formulario');
const username = document.getElementById('email');
const password = document.getElementById('password-usuario');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let users = Array( {
        usuario: username.value,
        contraseña: password.value
    });
    console.log(users);

    localStorage.setItem('user', JSON.stringify(users));
    location.href = 'index.html';
});