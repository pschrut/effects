import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as usuarioActions from '../../store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  user: Usuario;
  loading: boolean;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params.id;
      this.store.dispatch(new usuarioActions.CargarUsuario(id));
    });

    this.store.select('usuario').subscribe(user => {
      this.loading = user.loading;
      this.user = user.user;
    });
  }

}
