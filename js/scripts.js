/* const products = [
    { id: 1, clase: "Guitarra", marca: "Fender", modelo: "Stratocaster", precio: 1000, imagen: "./assets/images/01.jpg" },
    { id: 2, clase: "Guitarra", marca: "Gibson", modelo: "Les Paul", precio: 2500, imagen: "./assets/images/02.jpg" },
    { id: 3, clase: "Guitarra", marca: "Strandberg", modelo: "Boden-std Nx", precio: 3500, imagen: "./assets/images/03.jpg" },
    { id: 4, clase: "Amplificador de guitarra", marca: "Fender", modelo: "Champion 40", precio: 1500, imagen: "./assets/images/04.png" },
    { id: 5, clase: "Amplificador de guitarra", marca: "Mesa Boogie", modelo: "Dual Rectifier 100", precio: 3500, imagen: "./assets/images/05.png" },
    { id: 6, clase: "Amplificador de guitarra", marca: "Marshall", modelo: "JVM-410", precio: 3400, imagen: "./assets/images/06.png" },
    { id: 7, clase: "Guitarra", marca: "Jackson", modelo: "Randy Rhoads RR3", precio: 4700, imagen: "./assets/images/07.png" },
];
 */
// Para crear la tienda
const store = document.getElementById("store");

getProductFav()
getProducts()

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

