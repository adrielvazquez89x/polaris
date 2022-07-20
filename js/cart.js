// Para crear el carrito
let modalCart = document.getElementById("cart");
const cartRenderize = () => {
    let total = 0;
    modalCart.className = "cart";
    modalCart.innerHTML = "";
    if (cart.length > 0) {
        console.log(cart)
        for (element of cart) {
            let subtotal = element.precio * element.amount
                       
            const cartCointainer = document.createElement("div");
            cartCointainer.className = "cartElement";
            cartCointainer.innerHTML = `<img class="cartImg" src="${element.imagen}" alt="">
            <div class="elementDetails">${element.marca} ${element.modelo}</div>
            <div class="elementDetails"> Cantidad: ${element.amount}</div>
            <div class="elementDetails"> Precio: ${element.precio}</div>
            <div class="elementDetails"> Subtotal: ${subtotal}</div>
            <button class="btn btn-warning" id="removeElement" onclick="removeElement(${element.id})">Eliminar producto</button>`;
            console.log(subtotal)
            modalCart.appendChild(cartCointainer);

            total += subtotal


        };
       
        const totalContainer = document.createElement("div");
        totalContainer.className = "totalCart"
        totalContainer.innerHTML = `<div class="total">Total $${total}</div>
        <div>
        <button class="btn btn-success justify-content-center" id="finalizar" onclick="checkOut()"> Finalizar Compra </button>
        <div>`;
        modalCart.appendChild(totalContainer);
        return total
    }
    else {
        modalCart.classList.remove("cart");

    }
}
