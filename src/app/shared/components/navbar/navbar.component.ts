import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  usuarioLogged: any = {}
  nombre: string = 'Juan Camilo';
  iniciales: string = '';


  constructor(private authService: AuthService) {
    this.usuarioLogged = this.authService.usuarioLogged;
    this.nombre = this.authService.getUsuarioNombre();
    this.iniciales = this.nombre.split(' ')[0][0] + this.nombre.split(' ')[1][0];
  }



}
