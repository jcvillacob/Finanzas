import { AfterViewInit, Component } from '@angular/core';
import { FinanzasServiceService } from '../../services/finanzas-service.service';
import { initFlowbite } from 'flowbite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss'],
})
export class TransaccionesComponent implements AfterViewInit {
  transacciones: any[] = [];

  constructor(private finanzasServices: FinanzasServiceService) {
    this.getTransacciones();
  }

  getTransacciones() {
    this.finanzasServices.getTransaccionByUser().subscribe(data => {
      this.transacciones = data.reverse();
    });
  }

  ngAfterViewInit(): void {
    initFlowbite()
  }

  deleteTransaccion(transaccionID: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará la transacción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.finanzasServices.deleteTransaccion(transaccionID).subscribe(data => {
          this.getTransacciones();
        })
        Swal.fire(
          'Transacción Eliminada',
          'La transacción ha sido eliminada exitosamente.',
          'success'
        )
      }
    });
  }

  goBack() {
    window.history.back();
  }
}
