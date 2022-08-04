// Alerta agregado correctamente

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function alertAddCart() {
    Toast.fire({
        iconHtml: '<i class="fa-solid fa-music"></i>',
        iconColor: 'white',
        color: 'white',
        background: '#1AC071',
        title: 'Agregado correctamente'
    })
}

function popup() {
    setTimeout(() => {
        Swal.fire({
            title: 'Estamos locos!',
            text: 'Si llevás mas de 5 artículos, tenés un 10% de descuento',
            position: 'center-start',
            confirmButtonText: "Excelente",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }, 10000)
}

popup()


let alertAdd = document.getElementsByClassName("addCart");
console.log(alertAdd)
alertAdd[1].addEventListener("click", alertAddCart);
for (alert of alertAdd) {
    alert.addEventListener("click", alertAddCart);
};


