import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-gastos-recurrentes',
  templateUrl: './resumen-gastos-recurrentes.component.html',
  styleUrls: ['./resumen-gastos-recurrentes.component.scss']
})
export class ResumenGastosRecurrentesComponent {
  gastos = [
    { nombre: 'Netflix', valor: '$1,500', icono: 'fa-solid fa-clapperboard'},
    { nombre: 'Spotify', valor: '$4,200', icono: 'fa-brands fa-spotify' },
    { nombre: 'Smartfit', valor: '$1,500', icono: 'fa-solid fa-dumbbell' },
    { nombre: 'ChatGPT', valor: '$4,200', icono: 'fa-solid fa-robot' },
    { nombre: 'WOM', valor: '$1,500', icono: 'fa-solid fa-mobile' }
  ];
}
