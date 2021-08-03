let nameProfile = document.getElementById('name-profile');
let nameBusiness = document.getElementById('name-business');
let phoneBusiness = document.getElementById('phone-profile');

function validationProfile(option){
    if(nameProfile.value.length > 0){
        console.log('Hey si es mayor a 0');
        nameProfile.classList.remove('is-invalid');
        nameProfile.classList.add('is-valid');
    }
    if(nameBusiness.value.length > 0){
        console.log('Hey si es mayor a 0');
        nameProfile.classList.remove('is-invalid');
        nameProfile.classList.add('is-valid');
    }
    if(phoneBusiness.value.length > 0){
        console.log('Hey si es mayor a 0');
        nameProfile.classList.remove('is-invalid');
        nameProfile.classList.add('is-valid');
    }    
}
validation.addEventListener('submit', validationProfile);

phoneBusiness.addEventListener('keypress', (evento) => {
    evento.preventDefault()
    // console.log(event.keyCode)
    let valorTecla = String.fromCharCode(evento.keyCode);
    console.log(valorTecla);
    let valorParsed = parseInt(valorTecla);
    // console.log(valorParsed)
    if(valorParsed) {
      phoneBusiness.value = phoneBusiness.value + valorParsed;
    }
  });

