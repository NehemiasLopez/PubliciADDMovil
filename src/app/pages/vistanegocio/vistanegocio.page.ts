import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-vistanegocio',
  templateUrl: './vistanegocio.page.html',
  styleUrls: ['./vistanegocio.page.scss'],
})
export class VistanegocioPage implements OnInit {
  segmento:string;
  titulopage:string;
  productos:any[];
  constructor(private route: ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.titulopage=params.nombre;
      this.productos = JSON.parse(params.data);
    });
  }

  ngOnInit() {
    this.segmento="PRODUCTOS";
  }

  
}
