function addItem(item) {
  const itemHTML =
    '<div class="col-sm-6 col-md-4 col-lg-3 col-xl-3"> <div class="card" style="width: 18rem;">\n' +
    '    <img src="' +
    item.img +
    '" class="card-img-top" alt="image" style="width: 250px; height: 250px; margin: auto;">\n' +
    '    <div class="card-body ">\n' +
    '        <h5 class="card-title">' +
    item.name +
    "</h5>\n" +
    '        <p class="card-text">' +
    item.description +
    "</p>\n" +
    '        <a href="#" class="btn btn-primary">Más información</a>\n' +
    "    </div>\n" +
    "</div></div>\n" +
    "<br/>";
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

addItem({
  id: "1",
  categoria: "postres",
  name: "Rollos de cajeta",
  img: "https://thumbs.dreamstime.com/b/postres-del-caramelo-sobre-un-fondo-blanco-34330853.jpg",
  description: "Rollod de tortilla de harina rellenos de cajeta",
});

addItem({
  id: "1",
  categoria: "postres",
  name: "Tarta de queso",
  img: "https://st.depositphotos.com/1273864/1535/i/950/depositphotos_15358029-stock-photo-cheesecake-gourmet-food-desserts.jpg",
  description: "Tarta con trozos de queso dentro",
});

addItem({
  id: "1",
  categoria: "postres",
  name: "Pastel de chocolate",
  img: "http://pngimg.com/uploads/cake/cake_PNG13087.png",
  description: "Pastel de chocolate con cubierta de chocolate amargo",
});

addItem({
  id: "1",
  categoria: "postres",
  name: "Tiramisu",
  img: "https://previews.123rf.com/images/yvdavyd/yvdavyd1602/yvdavyd160200013/52669002-postre-tiramis%C3%BA-con-un-tenedor-en-primer-plano-en-un-fondo-blanco-.jpg",
  description: "Pay con quedo y galletas",
});

addItem({
  id: "1",
  categoria: "postres",
  name: "Donas",
  img: "https://static.vecteezy.com/system/resources/previews/000/802/730/non_2x/dessert-donuts-on-white-background-photo.jpg",
  description: "Donas de chocolate con trozos de nues o de fraza",
});

addItem({
  id: "1",
  categoria: "postres",
  name: "Gelatinas",
  img: "https://laalacenadelchef.co/wp-content/uploads/2019/06/Beneficios-de-la-gelatina-1.jpg",
  description: "Gelatinas de varios sabores",
});
addItem({
  id: "1",
  categoria: "postres",
  name: "Helados",
  img: "https://http2.mlstatic.com/D_NQ_NP_602490-MLM31907002361_082019-O.jpg",
  description: "Helados de varios sabores",
});
addItem({
  id: "1",
  categoria: "postres",
  name: "Paletas",
  img: "https://thumbs.dreamstime.com/b/eiscreme-und-eis-stiel-42276074.jpg",
  description: "Paletas de agua o leche de varios sabores",
});
addItem({
  id: "1",
  categoria: "postres",
  name: "Brownie Espacial",
  img: "https://previews.123rf.com/images/twoellis/twoellis1007/twoellis100700023/7438855-brownie-reci%C3%A9n-horneada-sirviendo-en-una-peque%C3%B1a-placa-de-peltre-con-fondo-blanco-.jpg",
  description: "Brownie que te lleva al espacio",
});
addItem({
  id: "1",
  categoria: "postres",
  name: "Tarta de coco",
  img: "https://cdn.aarp.net/content/dam/aarp/food/recipes/2019/01/1140-easy-to-bake-cake-esp.imgcache.rev.web.900.513.jpg",
  description: "Tarta con una capa de coco rallado",
});
addItem({
  id: "1",
  categoria: "postres",
  name: "Flan",
  img: "https://media.istockphoto.com/photos/caramel-custard-pudding-isolated-on-a-white-background-homemade-flan-picture-id1166546523?k=6&m=1166546523&s=612x612&w=0&h=5jkHqBgi2exbzBTIQ-CZ6fY_4FOZsTScmSs_o--ts0U=",
  description: "Flan napolitano",
});
addItem({
  id: "1",
  categoria: "postres",
  name: "Fresas con crema",
  img: "https://previews.123rf.com/images/anmbph/anmbph1707/anmbph170700036/81722138-postre-de-fresa-con-crema-batida-en-un-taz%C3%B3n-blanco-sobre-un-fondo-claro.jpg",
  description: "Fresas combinadas con crema y azucar",
});
