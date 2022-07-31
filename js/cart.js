// Para crear el carrito
let modalCart = document.getElementById("cart");
const cartRenderize = () => {
    let total = 0;
    modalCart.className = "cart";
    modalCart.innerHTML = "";
    if (cart.length > 0) {
        for (element of cart) {
            let subtotal = element.precio * element.amount

            const cartCointainer = document.createElement("table");
            cartCointainer.className = "cartElement";
            cartCointainer.innerHTML = `
            <img class="cartImg" src="${element.imagen}" alt="">
            <td>${element.marca} ${element.modelo}</td>
            <td>${element.amount}</td>
            <td>$${element.precio}</td>
            <td>$${subtotal}</td>
            <button class="btn btn-danger ml-5" id="removeElement" onclick="removeElement(${element.id})"> X </button>
            </tr>`;
            
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
