function valid() {
    let nombre = document.getElementById("nombre").value
    let name = document.getElementById("name")

    if (nombre.length < 3) {
        name.innerText = "Ingrese un nombre válido por favor."
    }
    else {
        name.innerHTML = ""
    }

    let email = document.getElementById("email").value
    let mail = document.getElementById("mail")
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    if (!re.exec(email)) {
        mail.innerText = "Email no valido."
    }
    else {
        mail.innerHTML = ""
    }

    let domicilio = document.getElementById("domicilio").value
    let street = document.getElementById("street")

    if (domicilio.length < 4) {
        street.innerText = "Ingrese una dirección válida por favor."
    }
    else {
        street.innerHTML = ""

    }

    if ((nombre.length > 4) && (re.exec(email) && (domicilio.length>4))) {
        Swal.fire({title:"Finalizaste tu compra!", text: `Se han ingresado correctamente los datos. Recibirás tu pedido en ${domicilio}` } )
    }

}
