//BUSCAR USUARIO
const submitUser = document.getElementById('submitUser');


let globalData;

fetch('http://localhost:8080/api/aceradecomida/', {
    method:'GET'
})

.then((response) => response.json())
.then(data => {
    console.log(data);
    console.log(data.length);
    globalData=data;
    
})


submitUser.addEventListener('click', (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/aceradecomida/";
    const email = document.getElementById('email').value;
    const password = document.getElementById('password-usuario').value;

    let respuesta;

    if(email =='' || password=='') {
        console.log("campos vacios");
        Swal.fire(
            'Error!',
            'Campos vacios',
            'warning'
          )
        return 0;
    }

globalData.forEach(element => {
    if(element.email == email && element.password == password) {
        let continuar = Array ({
            continuar: "yes"
        })
        console.log(continuar);
        localStorage.setItem('continuar', JSON.stringify(continuar));
        location.href = 'index.html';
    } else {
        Swal.fire(
            'Error!',
            'Datos incorrectos',
            'warning'
          )
    }
});


});