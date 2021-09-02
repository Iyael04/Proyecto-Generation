/* const endpoint = 'tienda.html';
const promise = fetch(endpoint);

promise
    .then(function(data){
        return data.json;
    })
    
    .then(function(data){
        selectShop(data);
        saveLocalStorage(data);
    })

    .catch(function(error){
        console.log("error");
    })

    function saveLocalStorage(){
        window.localStorage.setItem('items', JSON.stringify());
    }


function selectShop(){
    let plantillaFinal = '';
    
    const select1 = document.getElementById('shopFood');
    

    let cambio = `
    <li id="drinks"><a href="tienda.html?id="">Bebidas</a></li>
    <li id="fastFood"><a href="tienda.html">Comida rápida</a></li>
    <li id="food"><a href="tienda.html">Comida corrida</a></li>
    <li id="desserts"><a href="tienda.html">Postres</a></li>
    `;

    plantillaFinal = plantillaFinal + cambio;
    select1.innerHTML = plantillaFinal;
}
*/
