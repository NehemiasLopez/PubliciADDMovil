import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-vercotizaciones',
  templateUrl: './vercotizaciones.page.html',
  styleUrls: ['./vercotizaciones.page.scss'],
})
export class VercotizacionesPage implements OnInit {
  name:string;
  negocios: any[];
  constructor(private route: ActivatedRoute, private router:Router, public navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      this.name=params.titulo;
      this.negocios = JSON.parse(params.data);
    });
  }

  regresar(){
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
