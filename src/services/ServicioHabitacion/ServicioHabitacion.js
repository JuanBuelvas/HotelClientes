export async function ServicioHabitacion (){
    //1.URI del Servicio
    const URI = "https://servercomfama.herokuapp.com/viajesComfama/habitaciones"

    //2.Configurar la Peticion
    const request={
        method:"GET"
    }

    //3.Consumir API
    let response=await fetch(URI, request);
    let datos=await response.json();

    return datos;
}