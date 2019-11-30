import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-vistaproducto',
  templateUrl: './vistaproducto.page.html',
  styleUrls: ['./vistaproducto.page.scss'],
})
export class VistaproductoPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  
  ngOnInit() {
  }

  regresar(){
    this.navCtrl.back();
  }
}
