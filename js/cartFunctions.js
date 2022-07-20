// Agregar al carrito 
const cart = getProductsCart();
const addToCart = (i) => {
    const elementCart = cart.findIndex((element) => {
        return element.id == products[i].id
    });
    if (elementCart == -1) {
        const elementAdd = products[i];
        console.log(elementAdd)
        elementAdd.amount = 1;
        cart.push(elementAdd);
        productsCart(cart)
        refreshCart()
        cartRenderize();
    }
    else {
        cart[elementCart].amount += 1
        productsCart(cart)
        refreshCart()
        cartRenderize();
    }
}

// Actualizar el boton del carrito 
function refreshCart() {
    let contenido = `
    <button type="button" class="btn btn-warning position-relative">
    Carrito
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         0
         <span class="visually-hidden">unread messages</span>
         </span>
    </button>
    `
    let total = 0;

    if (cart.length > 0) {
        for (let product of cart) {
            total += product.amount;

        }

        contenido = `
        <button href"#finalizar" onClick="cartRenderize()" type="button" class="btn btn-warning position-relative">
        Carrito
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${total}
            <span class="visually-hidden"></span>
            </span>
        </button>
     `
    }

    document.getElementById("cartBtn").innerHTML = contenido;
    return total

}

// Elimnar elemento del carrito
function removeElement(id) {
    let pos = cart.findIndex(x => x.id == id);
    cart[pos].amount -= 1;

    if (cart[pos].amount == 0) {
        cart.splice(pos, 1);
    }

    productsCart(cart);
    refreshCart();
    cartRenderize()
}