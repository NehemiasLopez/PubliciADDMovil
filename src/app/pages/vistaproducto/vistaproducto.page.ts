import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-vistaproducto',
  templateUrl: './vistaproducto.page.html',
  styleUrls: ['./vistaproducto.page.scss'],
})
export class VistaproductoPage implements OnInit {

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
