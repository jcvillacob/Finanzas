import { Component } from '@angular/core';

@Component({
  selector: 'app-recurrentes',
  templateUrl: './recurrentes.component.html',
  styleUrls: ['./recurrentes.component.scss']
})
export class RecurrentesComponent {

  goBack() {
    window.history.back();
  }

}
