// Búsqueda de lugares turísticos

document.addEventListener("DOMContentLoaded", function () {

    const buscador = document.getElementById("buscarLugar");
    const tarjetas = document.querySelectorAll("#lugares .tarjeta-lugar");

    buscador.addEventListener("input", function () {

        const texto = buscador.value.toLowerCase().trim();

        tarjetas.forEach(function (tarjeta) {

            const contenido = tarjeta.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                tarjeta.style.display = "flex";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });
// Mostrar y ocultar información de las experiencias

const botonesVerMas = document.querySelectorAll(".ver-mas");

botonesVerMas.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const detalle = boton.parentElement.querySelector(".detalle-experiencia");

        if (detalle.hidden) {
            detalle.hidden = false;
            boton.textContent = "Ver menos";
        } else {
            detalle.hidden = true;
            boton.textContent = "Ver más";
        }

    });

});
});