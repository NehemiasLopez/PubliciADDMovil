import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {
  listacarusel:any[]=[];
  listabanners:any[];
  listaproductos:any[];
  countbanners:number;
  constructor(private router:Router, private http:HttpClient) {
    let formdata = new FormData();
    formdata.append('tokenU', '2');
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Ofertas.php",formdata).subscribe(data =>{
      this.listabanners = JSON.parse(JSON.stringify(data)).Banners;
      this.listaproductos = JSON.parse(JSON.stringify(data)).Productos;
      this.countbanners = this.listabanners.length;
      for(let i=0; i < this.countbanners; i++){
        if(i <= 5){
          this.listacarusel.push(this.listabanners.pop());
        }else{
          break;
        }
      }
    });
  }

  enviardatos(tokent:string, tokenp:string){
    let formdata = new FormData();
    formdata.append('tokent', tokent);
    formdata.append('tokenp', tokenp);
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Verproducto.php", formdata).subscribe(data =>{
      let navigationextras : NavigationExtras = {
        queryParams: {
          data: JSON.stringify(data)
        }
      }
      this.router.navigate(['/tabs/vistaoferta'], navigationextras);
    });
  }

  ngOnInit() {
  }

}
