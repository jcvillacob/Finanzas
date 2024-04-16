import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (!this.username || !this.password) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `El login no ha sido procesado.`,
        'error'
      )
      return
    }
    const data = {
      username: this.username,
      password: this.password
    }
    this.authService.login(data).subscribe(data => {
      this.router.navigate(['/finanzas']);
      console.log(data);
    })
  }

}
