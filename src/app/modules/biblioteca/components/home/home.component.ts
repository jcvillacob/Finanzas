import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  buscador: string = 'Libros';
  keyword: string = '';
  recomendaciones: string[] = [];
  informaciones: any[] = [];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
      initFlowbite();
  }

  asignarBuscador(search: string) {
    this.buscador = search;
  }

  getSugerencias() {
    if (this.keyword != '') {
      this.librosService.getSugerencias(this.keyword).subscribe((data: any) => {
        this.recomendaciones = data.suggestions.map((c: any) => c.name);
        initFlowbite();
      });
    } else {
      this.recomendaciones = [];
    }
  }

  getInfo(recom: string) {
    this.librosService.getInfo(recom).subscribe(data => {
      this.informaciones = data;
    })
  }

  getInfoClick() {
    this.librosService.getInfo(this.keyword).subscribe(data => {
      this.informaciones = data;
      console.log(data)
    })
  }

}
