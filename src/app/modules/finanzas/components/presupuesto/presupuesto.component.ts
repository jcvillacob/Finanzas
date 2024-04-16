import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FinanzasServiceService } from '../../services/finanzas-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements AfterViewInit, OnInit {
  presupuestos: any[] = [];
  categorias: any[] = [];
  transacciones: any[] = [];

  /* Para crear Presupuesto */
  monto!: number;
  categoria!: number;


  constructor(private finanzasServices: FinanzasServiceService) { }


  ngOnInit() {
    this.obtenerCategoriasYGastos();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  obtenerCategoriasYGastos() {
    this.finanzasServices.getPresupuesto().subscribe(categorias => {
      this.presupuestos = categorias;
      // Obtener las categorías
      this.finanzasServices.getCategorias().subscribe(data => {
        this.categorias = data;
      })

      // Ahora obtenemos los gastos del mes
      this.finanzasServices.getGastosMes().subscribe(gastosMes => {
        for (let categoria of this.presupuestos) {
          categoria.transacciones = gastosMes.filter(g => g.CategoriaID === categoria.CategoriaID);
        }
        this.presupuestos = this.presupuestos.map(categoria => {
          // Calculamos la suma de los montos para cada categoria
          const montoTotal = gastosMes.filter(gasto => gasto.CategoriaID === categoria.CategoriaID)
            .reduce((sum, current) => sum + current.Monto, 0);
          // Añadimos el monto total a la categoria
          return { ...categoria, Gasto: montoTotal };
        });
        // Después de agregar el monto a cada categoría, calculamos el monto máximo
        const montoMaximo = Math.max(...this.presupuestos.map(categoria => categoria.Monto));
        // Opcionalmente, podrías querer calcular y añadir el porcentaje de cada categoría basado en el monto máximo
        this.presupuestos = this.presupuestos.map(categoria => {
          const porcentajeI = (categoria.Gasto / categoria.Monto) * 100;
          const porcentaje = Math.round(porcentajeI);
          return { ...categoria, porcentaje: porcentaje };
        });
      });
    });
  }

  crearPresupuesto() {
    if (!this.categoria || !this.monto) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `El presupuesto No ha sido creado.`,
        'error'
      )
      return
    };
    const data = {
      categoriaID: this.categoria,
      monto: this.monto,
      usuarioID: 1
    };
    this.finanzasServices.createPresupuesto(data).subscribe(data => {
      this.obtenerCategoriasYGastos();
      Swal.fire(
        'Presupuesto Creado',
        `El presupuesto ha sido creado exitosamente.`,
        'success'
      )
    })
  }

  deletePresupuesto(presupuestoID: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará el presupuesto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.finanzasServices.deletePresupuesto(presupuestoID).subscribe(data => {
          this.obtenerCategoriasYGastos();
        })
        Swal.fire(
          'Presupuesto Eliminado',
          'El presupuesto ha sido eliminado exitosamente.',
          'success'
        )
      }
    });
  }

  editarPresupuesto() {

  }

  goBack() {
    window.history.back();
  }
}
