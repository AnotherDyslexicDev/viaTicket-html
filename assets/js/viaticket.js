function inicioSesion()
{
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    if(usuario.trim().length>0 && password.trim().length>0){
        window.location = "dashboard.html";
        return false;
    }
    else{
        alert("Login invalido");
    }
}
$('#login').on('click', function(event) {
    $(location).attr('href', "login.html");
    return false;
});
if(document.getElementById('grafica')){
// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]
// Podemos tener varios conjuntos de datos
const ticketsResueltos = {
    label: "Tickets Resueltos",
    data: [50, 60, 120, 90], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const ticketsPendientes = {
    label: "Tickets Pendientes",
    data: [70, 170, 5, 40], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
    borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            ticketsResueltos,
            ticketsPendientes,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
}
$('#btnUpload').click(function(){
    $('#adjTicket').click();
});
