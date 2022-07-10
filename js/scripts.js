const products = [
    { id: 1, clase: "Guitarra", marca: "Fender", modelo: "Stratocaster", precio: 1000, imagen: "./assets/images/01.jpg" },
    { id: 2, clase: "Guitarra", marca: "Gibson", modelo: "Les Paul", precio: 2500, imagen: "./assets/images/02.jpg" },
    { id: 3, clase: "Guitarra", marca: "Strandberg", modelo: "Boden-std Nx", precio: 3500, imagen: "./assets/images/03.jpg" },
    { id: 4, clase: "Amplificador de guitarra", marca: "Fender", modelo: "Champion 40", precio: 1500, imagen: "./assets/images/04.png" },
    { id: 5, clase: "Amplificador de guitarra", marca: "Mesa Boogie", modelo: "Dual Rectifier 100", precio: 3500, imagen: "./assets/images/05.png" },
    { id: 6, clase: "Amplificador de guitarra", marca: "Marshall", modelo: "JVM-410", precio: 3400, imagen: "./assets/images/06.png" }
];

// Para crear la tienda
const store = document.getElementById("store");
console.log(store)
products.forEach((element, i) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-2","col-md-3", "col-lg-4", "align-items-center", "margen");

    let code = `  <img src="${element.imagen}" class="card-img-top" alt="${element.marca} ${element.modelo}">
    <div class="card-body">
      <h5 class="card-title">${element.marca} ${element.modelo}</h5>
      <p class="card-text">${element.clase} ${element.marca} ${element.modelo} precio:$${element.precio}</p>
      <a href="#finalizar" class="btn btn-danger" onClick="addToCart(${i})">Comprar</a>
    </div>`
    card.innerHTML = code;
    store.appendChild(card);
});


let modalCart = document.getElementById("cart");
let total = 0;

let cart = [];


const cartRenderize = () => {
    modalCart.className = "cart";
    modalCart.innerHTML = "";
    if (cart.length > 0) {
        cart.forEach((element, i) => {
            total = total + element.precio * element.amount;
            const cartCointainer = document.createElement("div");
            cartCointainer.className = "cartElement";
            cartCointainer.innerHTML = `<img class="cartImg" src="${element.imagen}" alt="">
            <div class="elementDetails">${element.marca} ${element.modelo}</div>
            <div class="elementDetails"> Cantidad: ${element.amount}</div>
            <div class="elementDetails"> Precio: ${element.precio}</div>
            <div class="elementDetails"> Subtotal: $${element.precio * element.amount}</div>
            <button class="btn btn-warning" id="removeElement" onclick="removeElement(${i})">Eliminar producto</button>`;
            modalCart.appendChild(cartCointainer);

        });

        const totalContainer = document.createElement("div");
        totalContainer.className = "totalCart"
        totalContainer.innerHTML = `<div class="total">Total $${total}</div>
        <div>
        <button class="btn btn-success justify-content-center" id="finalizar" onclick="checkOut()"> Finalizar Compra </button>
        <div>`;
        modalCart.appendChild(totalContainer);

    }
    else {
        modalCart.classList.remove("cart");

    }
}


// Agregar al carrito 

const addToCart = (i) => {
    const elementCart = cart.findIndex((element) => {
        return element.id == products[i].id
    });
    if (elementCart == -1) {
        const elementAdd = products[i];
        console.log(elementAdd)
        elementAdd.amount = 1;
        cart.push(elementAdd);
        refreshStorage(cart);
        cartRenderize();
    }
    else {
        cart[elementCart].amount += 1
        refreshStorage(cart);
        cartRenderize();
    }
}

// Elimnar elemento del carrito
const removeElement = (i) => {
    cart.splice(i, 1);
    refreshStorage(cart);
    cartRenderize()
}

// Actualizar el Storage

const refreshStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))

}

// Compra completada

const checkOut = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    modalCart.innerHTML = "";
    const purchasedCompleted = `        <div class="purchaseCompleted">
    <p class="purchaseP">Ya casi finalizamos, el ${total}</p>
        <div class="clientData">
            <p>Complete sus datos por favor</p>
            <button class="btn btn-warning form" id="form" onclick="formRenderize()"> Ingrese sus datos</button>
        </div>
    </div>`
    modalCart.innerHTML = purchasedCompleted;
};

