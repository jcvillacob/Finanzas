import { AfterViewInit, Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FinanzasServiceService } from '../../services/finanzas-service.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recurrentes',
  templateUrl: './recurrentes.component.html',
  styleUrls: ['./recurrentes.component.scss']
})
export class RecurrentesComponent implements AfterViewInit {
  gastos: any[] = [];
  categorias: any[] = [];
  usuarioID!: number;
  iconos!: any[];

  /* Para crear suscripcion */
  categoria!: number;
  monto!: number;
  fecha!: string;
  descripcion!: string;
  frecuencia!: string;
  icono!: string;

  constructor(private finanzasService: FinanzasServiceService, private authService: AuthService) {
    this.finanzasService.getCategorias().subscribe(data => {
      this.getSuscripciones();
      this.usuarioID = this.authService.getUsuarioID();
      this.categorias = data.filter(c => c.Tipo == 'Gasto');
    })
  }

  setIcon(icon: string) {
    this.icono = icon
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  getSuscripciones() {
    this.finanzasService.getRecurrentes().subscribe(data => {
      this.gastos = data;
      this.finanzasService.getIconos().subscribe(data => {
        this.iconos = data;
      });
    })
  }

  goBack() {
    window.history.back();
  }

  crearSuscripcion() {
    if (!this.categoria || !this.monto || !this.fecha || !this.descripcion || !this.frecuencia || !this.icono) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `La suscripción No ha sido creada.`,
        'error'
      )
      return
    }
    const data = {
      usuarioID: this.usuarioID,
      categoriaID: this.categoria,
      monto: this.monto,
      fechaInicio: this.fecha,
      descripcion: this.descripcion,
      frecuencia: this.frecuencia,
      icono: this.icono
    }
    this.finanzasService.crearRecurrente(data).subscribe(data => {
      this.getSuscripciones();
      Swal.fire(
        'Suscripción Creada',
        `La suscripción ha sido creada exitosamente.`,
        'success'
      )
    })
  }

  eliminarSuscripcion(recurrenteID: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará la suscripción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.finanzasService.deleteRecurrente(recurrenteID).subscribe(data => {
          this.getSuscripciones();
          Swal.fire(
            'Suscripción Eliminada',
            `La suscripción ha sido eliminada exitosamente.`,
            'success'
          )
        })
      }
    })
  }
}
