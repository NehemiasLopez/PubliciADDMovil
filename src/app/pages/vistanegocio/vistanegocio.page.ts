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
  nosotros:any[];
  imagenes:any[];
  show:number=2;
  constructor(private route: ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.titulopage= params.nombre;
      this.productos = JSON.parse(params.data).Productos;
      this.nosotros = JSON.parse(params.data).Nosotros;
      this.imagenes = JSON.parse(params.data).FotoNS;
    });
  }

  ngOnInit() {
    this.segmento="PRODUCTOS";
  }

  
}
