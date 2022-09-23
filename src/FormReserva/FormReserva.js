import { useState } from "react"
import { ServicioReserva } from "../services/ServicioReserva/ServicioReserva"
import Swal from 'sweetalert2'
export function FormReserva({idSeleccionado}) {

    const[entrada, setEntrada]=useState("")
    const[salida, setSalida]=useState("")
    const[ninos, setNinos]=useState("")
    const[adultos, setAdultos]=useState("")

    function EnvioFormulario(event){
        event.preventDefault()
        // console.log(entrada)
        // console.log(salida)
        // console.log(adultos)
        // console.log(ninos)
        let data = {
            "idHabitacion":idSeleccionado,
            "fechaEntrada":entrada,
            "fechaSalida":salida,
            "numeroNinos":ninos,
            "numeroAdultos":adultos
        }
        //console.log(data)
        ServicioReserva(data)
        .then(function (response) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: response.mensaje,
                showConfirmButton: false,
                timer: 1500
              })
        })
    }

    return(
        <>
            <form onSubmit={ EnvioFormulario }>
                <div className="row">
                    <div className="col-12 col-md-8 text-white">
                        <h4>HAZ TU RESERVA</h4>
                        <h5>y obten un increible descuento</h5>
                        <hr></hr>
                    </div>
                </div>

                <div className="row text-white">
                    <div className="col-12 col-md-4">
                        <label className="form-label">Fecha de Entrada</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-calendar3"></i></span>
                            <input 
                                type="date" 
                                className="form-control"
                                onChange={(event)=>{
                                    setEntrada(event.target.value)
                                }}
                                value={entrada}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label">Fecha de Salida</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-calendar3"></i></span>
                            <input 
                                type="date" 
                                className="form-control"
                                onChange={(event)=>{
                                    setSalida(event.target.value)
                                }}
                                value={salida}
                            />
                        </div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col-12 col-md-4">
                        <label className="form-label">Numero de Adultos</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-person-plus-fill"></i></span>
                            <select 
                                className="form-select" 
                                aria-label="Default select example"
                                onChange={(event)=>{
                                    setAdultos(event.target.value)
                                }}
                                value={adultos}
                                defaultValue="1"
                            >
                                <option selected>Escoja una Opcion</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label">Numero de Niños</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-person-plus-fill"></i></span>
                            <select 
                                className="form-select" 
                                aria-label="Default select example"
                                onChange={(event)=>{
                                    setNinos(event.target.value)
                                }}
                                value={ninos}
                                defaultValue="0"
                            >
                                <option selected>Escoja una Opcion</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col-8">
                        <button type="submit" className="btn btn-primary w-100">RESERVAR</button>
                    </div>
                </div>
            </form>
        </>
    );
}