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

