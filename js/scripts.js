const products = [
    { id: 1, clase: "Guitarra", marca: "Fender", modelo: "Stratocaster", precio: 1000, imagen: "./assets/images/01.jpg" },
    { id: 2, clase: "Guitarra", marca: "Gibson", modelo: "Les Paul", precio: 2500, imagen: "./assets/images/02.jpg" },
    { id: 3, clase: "Guitarra", marca: "Strandberg", modelo: "Boden-std Nx", precio: 3500, imagen: "./assets/images/03.jpg" },
    { id: 4, clase: "Amplificador de guitarra", marca: "Fender", modelo: "Champion 40", precio: 1500, imagen: "./assets/images/04.png" },
    { id: 5, clase: "Amplificador de guitarra", marca: "Mesa Boogie", modelo: "Dual Rectifier 100", precio: 3500, imagen: "./assets/images/05.png" },
    { id: 6, clase: "Amplificador de guitarra", marca: "Marshall", modelo: "JVM-410", precio: 3400, imagen: "./assets/images/06.png" },
    { id: 7, clase: "Guitarra", marca: "Jackson", modelo: "Randy Rhoads RR3", precio: 4700, imagen: "./assets/images/07.png" },
];

// Para crear la tienda
const store = document.getElementById("store");
productsLS(products);

getProductsLS().forEach((element, i) => {
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

// Favorito
const [, , , , , , { id, clase, marca, modelo, precio, imagen }] = getProductsLS()
const fav = document.getElementById("favorites");
let favCard = document.createElement("div");
favCard.classList.add("card", "col-sm-2", "col-md-3", "col-lg-4", "align-items-center", "margen", "border-0");

favCard.innerHTML = `<img src="${imagen}" class="card-img-top" alt="${marca} ${modelo}">
<div class="card-body">
  <h5 class="card-title">${marca} ${modelo}</h5>
  <p class="card-text">${clase} ${marca} ${modelo} precio: $${precio}</p>
  
</div>`
favorites.appendChild(favCard)




// Compra completada
const checkOut = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    modalCart.innerHTML = "";
    refreshCart() > 5 ? Swal.fire({ title: "Increible!", text: "Como llevaste mas de cinco productos, te haremos un descuento del 10%", confirmButtonText: "Excelente" }) : Swal.fire({text: "No hay descuentos disponibles."})


    const purchasedCompleted = `        <div class="purchaseCompleted">
    <p class="purchaseP">Ya casi finalizamos, el ${discount(cartRenderize())}</p>
        <div class="clientData">
            <p>Complete sus datos por favor</p>
            <button class="btn btn-warning form" id="form" onclick="formRenderize()"> Ingrese sus datos</button>
        </div>
    </div>`
    modalCart.innerHTML = purchasedCompleted;
};


refreshCart()
