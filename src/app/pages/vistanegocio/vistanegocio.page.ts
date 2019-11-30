import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular'
import { HttpClient } from '@angular/common/http';

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
  imagenesNS:any[];
  ubicaciones:any[];
  imagenesUB:any[];
  show:number=2;
  constructor(private route: ActivatedRoute, private router:Router, public navCtrl: NavController, private http:HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.titulopage= params.nombre;
      this.productos = JSON.parse(params.data).Productos;
      this.nosotros = JSON.parse(params.data).Nosotros;
      this.imagenesNS = JSON.parse(params.data).FotoNS;
      this.ubicaciones = JSON.parse(params.data).Ubicaciones;
      this.imagenesUB = JSON.parse(params.data).FotoUB;
    });
  }

  cambiarpagina(tonekt:string, tokenp:string){
    let formdata = new FormData();
    formdata.append('tokent', tonekt);
    formdata.append('tokenp', tokenp);
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Verproducto.php", formdata).subscribe(data =>{
      let navigationextras : NavigationExtras = {
        queryParams: {
          data: JSON.stringify(data)
        }
      }
      this.router.navigate(['/tabs/vistaproducto'], navigationextras);
    });
  }
  regresar(){
    this.navCtrl.back();
  }
  ngOnInit() {
    this.segmento="PRODUCTOS";
  }

  
}
