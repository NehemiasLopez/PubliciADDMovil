import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vistaoferta',
  templateUrl: './vistaoferta.page.html',
  styleUrls: ['./vistaoferta.page.scss'],
})
export class VistaofertaPage implements OnInit {

  productos:any[];
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.productos = JSON.parse(params.data).Productos;
      console.log(this.productos);
    });
  }

  ngOnInit() {
  }

  regresar(){
    this.navCtrl.back();
  }
}
