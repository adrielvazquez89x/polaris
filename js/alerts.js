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
        color:  'white',
        background: '#1AC071',
        title: 'Agregado correctamente'
    })

}

let alertAdd = document.getElementsByClassName("addCart");
alertAdd[0].addEventListener("click", alertAddCart);
for (alert of alertAdd) {
    alert.addEventListener("click", alertAddCart);
};

