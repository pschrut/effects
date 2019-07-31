import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions, public usuarioService: UsuarioService) { }

    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType(usuarioActions.CARGAR_USUARIO),
        switchMap((action: usuarioActions.CargarUsuario) => {
            return this.usuarioService.getUserById(action.id).pipe(
                map(user => {
                    return new usuarioActions.CargarUsuarioSuccess(user);
                }),
                catchError(error => {
                    return of(new usuarioActions.CargarUsuarioFail(error));
                })
            );
        })
    );
}
