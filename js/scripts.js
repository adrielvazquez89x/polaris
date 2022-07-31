
// Para crear la tienda

let products = [];

fetch("./js/products.json")
.then((response) => response.json())
.then((data) => {
    storeProducts(data)

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
          <p class="card-text">${element.clase} ${element.marca} ${element.modelo} precio:$${element.precio}</p>
          <a class="btn btn-dark addCart" onClick="addToCart(${i})">Agregar al carrito</a>
        </div>`
        card.innerHTML = code;
        store.appendChild(card);
    });
    
}

// Favorito


// Compra completada
const checkOut = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    modalCart.innerHTML = "";
    refreshCart() > 5 ? Swal.fire({ title: "Increible!", text: "Como llevaste mas de cinco productos, te haremos un descuento del 10%", confirmButtonText: "Excelente" }) : Swal.fire({ text: "No hay descuentos disponibles." })

    const purchasedCompleted = `        <div class="purchaseCompleted">
    <p class="purchaseP">Ya casi finalizamos, el total es de $${discount(cartRenderize())}</p>
        <div class="clientData">
            <p>Complete sus datos por favor</p>
        </div>
       <p class="text-center"><a href="./compra.html" target="_blank"> <button class="btn btn-warning form mx-auto" id="form")"> Ingrese sus datos</button> </a> </p>
    </div>`
    const removeTable = document.getElementById("coso");
    removeTable.className = "none";
    modalCart.innerHTML = purchasedCompleted;
};

function newTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
}

refreshCart()

