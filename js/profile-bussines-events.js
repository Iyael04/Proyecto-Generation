
let obtenerData = localStorage.getItem("obtenerData");
let operation = "add";
obtenerData = JSON.parse(obtenerData);
if (obtenerData === null){
    obtenerData = [];
}

function addProducts () {
    let dataProducts = JSON.stringify({
        Producto : $("#add-product").val(),
        Price : $("#add-price").val(),
    });

    obtenerData.push(dataProducts);
    localStorage.setItem("obtenerData", JSON.stringify(obtenerData));

    listProductos();
}

// function listProductos (){
//     $("#list-products").html(
//             `
//                 <tr>
//                     <th width=200> Producto </th>
//                     <th style="text-align: center" width=100> Precio </th>
//                     <th style="text-align: center" width=100> Editar </th>
//                     <th style="text-align: center" width=100> Eliminar </th>
//                 </tr>`
//     );

//     for (let i in obtenerData) {
//         let data = JSON.parse(obtenerData[i]);
//         $("#list-products").append(
//                         `<tr>
//                             <td>${data.Producto}</td>
//                             <td align="center">$${data.Price}.00</td>
//                             <td align="center"> <a id="${i}" class="btnEditar" href="#"> <img src="./img/icon-edit.gif" width="25px" height="25px"/></a></td>
//                             <td align="center"> <a id="${i}" class="btnEliminar" href="./profile-business.html"> <img src="./img/icon-trash.gif" width="25px" height="25px"/></a></td>
//                         </tr>`);
//     }

// }

listProductos();

function eraseData(e){
    obtenerData.splice(e, 1);
    localStorage.setItem("obtenerData", JSON.stringify(obtenerData));
}

function editData() {
    obtenerData[i_select] = JSON.stringify({
        Producto : $("#add-product").val(),
        Price : $("#add-price").val(),
    });
    localStorage.setItem("obtenerData", JSON.stringify(obtenerData));
    operation = "add";
    return true;
}

$(".btnEliminar").bind("click", function(){
    i_select = $(this).attr("id");
    eraseData(i_select);
    listProductos();
});

$(".btnEditar").bind("click", function() {
    operation = "edit";
    i_select = $(this).attr("id");
    let addProducts = JSON.parse(obtenerData[i_select]);
    $("#add-product").val(addProducts.Producto);
    $("#add-price").val(addProducts.Price);
    $("#add-product").focus();
});

$("#add-products").bind("submit", function() {    
    if (operation == "add")
        return addProducts();
    else {
        return editData();
    }

});



//Cargar foto de perfil

function mostrarImage() {
    const preview = document.getElementById('selectImage');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
} 

//Cargar fotos a galeria

//FOTO 1
function mostrarImageOne() {
    const preview = document.getElementById('selectImage1');
    const file = document.querySelector("#selectFile1").files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}

//FOTO 2
function mostrarImageTwo() {
    const preview = document.getElementById('selectImage2');
    const file = document.querySelector("#selectFile2").files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}


//FOTO 3
function mostrarImageThree() {
    const preview = document.getElementById('selectImage3');
    const file = document.querySelector("#selectFile3").files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}