import './Home.css'
//Importar FormReserva
import { FormReserva } from '../FormReserva/FormReserva';
import { Actividades } from '../Actividades/Actividades';
import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

export function Home() {

    //Usando useState
    const [estadoCarga, setEstadoCarga]=useState(true)
    const [habitaciones, setHabitaciones]=useState(null)
    const [habitacionSeleccionada, setHabitacion]=useState("")

    //Usando useEffect
    useEffect(function () {
        ServicioHabitacion()
        .then(function (response) {
            //console.log(response);
            setHabitaciones(response)
            setEstadoCarga(false)
        })
    },[])

    if(estadoCarga){
        return (
            <>
                <h1>Estoy Cargando...</h1>
            </>
        )
    } else {
        return(
            <>
                <div className='banner'>
                    <FormReserva idSeleccionado={habitacionSeleccionada}></FormReserva>
                </div>
    
                <div className='container'>
                    <Actividades></Actividades>
                </div>
    
                <div className="mt-5">
                    <div className='container-fluid my-5'>
                        <div className='row'>
                            <div className='col-12'>
                                <h1>Habitaciones: </h1>
                            </div>
                        </div>
                        <div className='row row-cols-1 row-cols-md-4 g-2'>
                            {
                                habitaciones.datos.map(function(habitacion){
                                    return(
                                        <>
                                            <div className="col">
                                                <div className='card h-100 '>
                                                    <img src={habitacion.imagenes[0]} alt="img" height="250px" className=''/>
                                                    <h3 className='text-center'>{habitacion.nombre}</h3>
                                                    <p className='mx-2'>{habitacion.descripcion}</p>
                                                    <h2 className='text-start'>${habitacion.valorNoche}</h2>
                                                    <div className='mx-2 d-inline'>
                                                        <i className="bi bi-person-fill"></i>
                                                        <i className="bi bi-person-fill"></i>
                                                        <i className="bi bi-person-fill"></i>
                                                    </div>
                                                </div>
                                                <button className='btn btn-primary w-100' onClick={()=>{
                                                    setHabitacion(habitacion._id)
                                                    Swal.fire({
                                                        position: 'center',
                                                        icon: 'success',
                                                        title: 'Habitacion Seleccionada',
                                                        showConfirmButton: false,
                                                        timer: 2500
                                                      })
                                                }}>Reservar</button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}