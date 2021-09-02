const header = document.getElementById("sesion");
const header2 = document.getElementById("register");
const header3 = document.getElementById("shop-list");
const header4 = document.getElementById("icon-handbag");

let respuesta = JSON.parse(localStorage.getItem("continuar"));

if (respuesta != undefined) {
  header.innerHTML = `<div class="top-login-inner"><a href="./index.html"><i class="icon-user"></i> <span class="user-login">Cerrar sesión</span> </a></div>`;

  header3.innerHTML = `<a href="./#">Tienda<i class="icofont icofont-simple-down"></i></a>
    <ul class="sub-menu">
        <li><a href="./products-drinks.html">Bebidas</a></li>
        <li><a href="./food-fast.html">Comida rápida</a></li>
        <li><a href="./nature.html">Vegetariano</a></li>
        <li><a href="./desserts.html">Postres</a></li>
    </ul>`;

  header4.innerHTML = `<a href="#" ><i class="icon-handbag"></i><span id="checkout"> $ 0.00</span></a>
    <ul class="mini-cart">
        <li class="mini-cart-btns">
            <div class="cart-btns">
                <a href="cart.html">Ver carrito</a>
                <a href="pay.html">Comprar</a>
            </div>
        </li>
    </ul>`;
} else {
  header.innerHTML = `<div class="top-login-inner"><a href="./login.html"><i class="icon-user"></i> <span class="user-login">Login</span> </a></div>
    `;
  header2.innerHTML = `<a href="#">Registrarme<i class="icofont icofont-simple-down"></i></a>
    <ul class="sub-menu">
        <li><a href="./register-user.html">Soy usuario</a></li>
        <li><a href="./register-bussines.html">Soy comercio</a></li>
    </ul>`;
}

header.addEventListener("click", function () {
  localStorage.clear("continuar");
  location.href = "index.html";
});
