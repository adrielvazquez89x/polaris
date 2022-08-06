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
            toast: true,
            text: 'Si llevás mas de 5 artículos, tenés un 10% de descuento',
            position: 'center-start',
            background: '#ffa500',
            confirmButtonText: "Excelente",
            color: 'white',
            showClass: {
                popup: 'animate__animated animate__fadeInLeft'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutLeft'
            }
        })
    }, 6000)
}

popup()




