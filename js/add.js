let products = [];
let total = 0;

function add(product, price) {
//    window.alert('El producto se agrego correctamente');
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Subtotal $${total}`
}
function pay() {
    window.alert(products.join(", \n"))
}
