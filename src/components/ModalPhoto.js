import React, { useContext } from 'react';
import { Context } from '../store/appContext';



const SubirFoto = props => {
    const { store, actions } = useContext(Context);
    return (
        <div class="modal fade" id="ModalSubirFoto" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="card">
                    <div class="card-header">
                        <h5 class="modal-title" id="modalModificar">Cambiar logo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group card-body">
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <div className="d-flex justify-content-start">
                            <button type="button" className="btn btn-success mr-1">Subir</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubirFoto;