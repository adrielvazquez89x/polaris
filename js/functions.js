// Funciones localStorage
/* function productsLS(products) {
    localStorage.setItem("products", JSON.stringify(products));
};

function getProductsLS() {
    return JSON.parse(localStorage.getItem("products") || []);
}; */

const getProducts = async () => {
    const response = await fetch("https://api.jsonbin.io/v3/b/62e6d6b71c7f436f211995fa")
    const data = await response.json()
    

    data.record.forEach((element, i) => {
        
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

const getProductFav = async () => {
    const response = await fetch("https://api.jsonbin.io/v3/b/62e6d6b71c7f436f211995fa")
    const data = await response.json()

    console.log(data)
    const dataFav = data.record

    const [, , , , , , { id, clase, marca, modelo, precio, imagen }] = dataFav
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





// Funciones Carrito
function productsCart(products) {
    localStorage.setItem("cart", JSON.stringify(products));
};

function getProductsCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

const discount = (total) => {
    return (total - (total * 0.10))
}

