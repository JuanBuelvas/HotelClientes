export function FormReserva() {
    return(
        <>
            <form>

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
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-calendar3"></i></span>
                            <input type="date" class="form-control"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label">Fecha de Salida</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-calendar3"></i></span>
                            <input type="date" class="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col-12 col-md-4">
                        <label className="form-label">Numero de Adultos</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-person-plus-fill"></i></span>
                            <select class="form-select" aria-label="Default select example">
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
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-person-plus-fill"></i></span>
                            <select class="form-select" aria-label="Default select example">
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
                        <button type="button" class="btn btn-primary w-100">RESERVAR</button>
                    </div>
                </div>
            </form>
        </>
    );
}