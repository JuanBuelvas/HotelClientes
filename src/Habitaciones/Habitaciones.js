import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion";

import { useEffect, useState } from "react";

export function Habitaciones(params) {

    //Usando useState
    const [estadoCarga, setEstadoCarga]=useState(true)
    const [habitaciones, setHabitaciones]=useState(null)

    //Usando useEffect
    useEffect(function () {
        ServicioHabitacion()
        .then(function (response) {
            //console.log(response);
            setHabitaciones(response)
            setEstadoCarga(false)
        })
    },[])

    //Evaluando la carga para renderizar
    if (estadoCarga) {
        return (
            <>
                <h1>Estoy Cargando...</h1>
            </>
        );
    } else {
        return(
            <div>
                {
                    habitaciones.datos.map(function (habitacion) {
                        return(
                            <div>
                                <h1>{habitacion.nombre}</h1>
                                <img src={habitacion.imagenes[0]}></img>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    

    // return(
    //     <>
    //         <h1>Habitaciones Trabajando</h1>
    //     </>
    // );
}