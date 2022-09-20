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
                <div className="container-fluid p-5 habitaciones">
                    <div className="row row-cols-1 row-cols-md-2 g-5">
                        {
                            habitaciones.datos.map(function (habitacion) {
                                return(
                                    <>
                                        {/* <div>
                                            <h1>{habitacion.nombre}</h1>
                                            <img src={habitacion.imagenes[0]}></img>
                                        </div> */}

                                        <div>
                                            <div className="card h-100">
                                                <img src={habitacion.imagenes[0]} className="card-img-top w-100 h-100" alt="..."></img>
                                                    <div className="card-body">
                                                    <h5 className="card-title">{habitacion.nombre}</h5>
                                                    <p className="card-text">{habitacion.descripcion}</p>
                                                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
    

    // return(
    //     <>
    //         <h1>Habitaciones Trabajando</h1>
    //     </>
    // );
}