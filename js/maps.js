function mapsLocalitation(){

    function location(position){
        let output = document.getElementById('maps');

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        
        

        output.innerHTML = `<iframe width="100%" height="200%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"" 
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;q=${latitude},%20${longitude}&amp;output=embed"></iframe>`;
    }


    function error(){
        output.innerHTML = "<p>No se pudo obtener tu ubacacion</p>"

    }

    
    navigator.geolocation.getCurrentPosition(location,error);

}
