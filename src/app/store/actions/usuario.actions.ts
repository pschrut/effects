import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario success';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario fail';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor(public id: string) { }
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor(public usuario: Usuario) { }
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor(public payload: any) { }
}

export type usuarioAcciones = CargarUsuario | CargarUsuarioSuccess | CargarUsuarioFail;
