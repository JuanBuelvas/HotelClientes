import './Home.css'
//Importar FormReserva
import { FormReserva } from '../FormReserva/FormReserva';
import { Actividades } from '../Actividades/Actividades';
export function Home() {
    return(
        <>
            <div className='banner'>
                <FormReserva></FormReserva>
            </div>

            <div className='container'>
                <Actividades></Actividades>
            </div>
        </>
    );
}