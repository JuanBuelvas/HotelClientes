export async function ServicioReserva(datos) {
    const URI="https://servercomfama.herokuapp.com/viajescomfama/reserva"
    console.log("Estamos en el servicio")
    console.log(datos)
    const PETICION={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datos)
    }

    let response = await fetch(URI, PETICION)
    response = await response.json()
    return response
}