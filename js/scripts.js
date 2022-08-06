// Para crear la tienda

let products = [1];

fetch("./js/products.json")
    .then((response) => response.json())
    .then((data) => {
        storeProducts(data), favProducts(data)
    })

// Para crear la tienda
const storeProducts = (data) => {
    products = data;
    const store = document.getElementById("store");
    products.forEach((element, i) => {
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-2", "col-md-3", "col-lg-4", "align-items-center", "margen", "border-0");

        let code = `<img src="${element.imagen}" class="card-img-top" alt="${element.marca} ${element.modelo}">
        <div class="card-body">
          <h5 class="card-title">${element.marca} ${element.modelo}</h5>
          <p class="card-text">${element.clase} ${element.marca} ${element.modelo} precio: $${element.precio}</p>
          <a class="btn btn-dark addCart" onClick="addToCart(${i})">Agregar al carrito</a>
        </div>`
        card.innerHTML = code;
        store.appendChild(card);

        let alertAdd = document.getElementsByClassName("addCart");
        alertAdd[0].addEventListener("click", alertAddCart);
        for (alert of alertAdd) {
            alert.addEventListener("click", alertAddCart);
        };
    });
}


// Favorito
const favProducts = (data) => {
    products = data;
    console.log(products)
    let [, , , , , , { id, clase, marca, modelo, precio, imagen }] = products
    const fav = document.getElementById("favorites");
    let favCard = document.createElement("div");
    favCard.classList.add("card", "col-sm-2", "col-md-3", "col-lg-4", "align-items-center", "margen", "border-0");

    favCard.innerHTML = `<img src="${imagen}" class="card-img-top" alt="${marca} ${modelo}">
    <div class="card-body">
    <h5 class="card-title">${marca} ${modelo}</h5>
    <p class="card-text">${clase} ${marca} ${modelo} precio: $${precio}</p>
    </div>`
    favorites.appendChild(favCard)

}

// Compra completada
const checkOut = () => {
    const show = document.querySelector(".contCart")
    show.classList.add("blck")
    
    modalCart.innerHTML = "";
    refreshCart() > 5 ? Swal.fire({ title: "Increible!", text: "Como llevaste mas de cinco productos, te haremos un descuento del 10%", confirmButtonText: "Excelente" }) : Swal.fire({ text: "No hay descuentos disponibles." })

    const purchasedCompleted = `        <div class="purchaseCompleted">
    <p class="purchaseP">Ya casi finalizamos, el total es de $${discount(cartRenderize())}</p>
        <div class="clientData">
            <p>Complete sus datos por favor</p>
        </div>
       <p class="text-center"> <button class="btn btn-warning form mx-auto" onClick="formRender()" id="form")"> Ingrese sus datos</button> </a> </p>
    </div>`
    const removeTable = document.getElementById("coso");
    removeTable.className = "none";
    modalCart.innerHTML = purchasedCompleted;
};

function newTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
}

const formRender = () => {
    const box = document.getElementById("box")
    box.innerHTML = "";
    const form = `
    <div class="bg-light container mx-auto col-md-6 formu">
    <h2 class="text-center py-3"> DATOS PARA EL ENVÍO </h2>
    <div class="container">
        <div class="row">
            <div class="row">
                <input type="text" id="nombre" placeholder="Nombre" value="" />
                <div  class="text-danger"  id="name"></div>
            </div>
            <div class="row py-1">
                <input type="email" id="email" placeholder="E-mail" />
                <div class="text-danger" id="mail"></div>

            </div>
            <div class="row">
                <input type="number" id="telefono" placeholder="Telefono" />
                <div class="text-danger" id="phone"></div>
            </div>
            <div class="row py-1">
                <input type="text" id="domicilio" placeholder="Domicilio" value="" />
                <div class="text-danger" id="street"></div>
            </div>
            <p class="text-center py-1 mb">
                <button type="button" class="btn btn-danger" onClick="valid()">Confirmar</button>
            </p>
        </div>
    </div>
</div>`;
    box.innerHTML = form;
};

refreshCart()

