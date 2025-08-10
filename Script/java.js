/*menu responsive*/ 
let btnOpoen= document.getElementById("btnOpen"), btnClosed=document.getElementById("btnClose"), 
    menuresponsive= document.getElementById("menuBar"),
    enlaces=document.getElementById("enlaces");
    //Click abrir
    btnOpoen.addEventListener("click", function () {
        menuresponsive.classList.add("active");
    })
    //Click cerrar
    btnClosed.addEventListener("click", function () {
        menuresponsive.classList.remove("active");
    })
    //cerrar menu con elementos de enlace
    enlaces.addEventListener("click", function () {
        menuresponsive.style.transitionDelay="0.5s";
        menuresponsive.classList.remove("active");
    });

/*Slider de productos */
let contenedor=document.querySelector('#slider')
    btnIzquierda=document.getElementById("btn-izquierda")
    btnDerecha=document.getElementById("btn-derecha")
    //Evento para el boton derecho
    btnDerecha.addEventListener("click", function() {
        contenedor.scrollLeft+=contenedor.offsetWidth;
    } );
    btnIzquierda.addEventListener("click", function () {
        contenedor.scrollLeft-=contenedor.offsetWidth;
    })
;
/*Formulario*/
var formulario = document.getElementById("formulario");

function validar(e) {
    var inputNombre = document.getElementById("nombre").value.trim(),
        inputEmail = document.getElementById("email").value.trim(),
        inputComent = document.getElementById("comentarios").value.trim();
        alertaBien=document.getElementById("alertgood");
        alertamal=document.getElementById("alerterror");

    if (inputNombre === "" || inputEmail === "" || inputComent === "") {
        e.preventDefault(); // Evitar que se envíe el formulario
        alertamal.classList.remove("hide");
        alertamal.classList.add("show");
        setTimeout(function () {
            alertamal.classList.remove("show");
            alertamal.classList.add("hide");
        },2000)
        
    } 
    else {
        e.preventDefault();
        alertaBien.classList.remove("hide");
        alertaBien.classList.add("show");
        setTimeout(function () {
            alertaBien.classList.remove("show");
            alertaBien.classList.add("hide");
        },2000)
        // Reiniciar los valores de los campos
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comentarios").value = "";
    }
}

/*Eventos del formulario*/
formulario.addEventListener("submit", validar);
/*Alertas*/

