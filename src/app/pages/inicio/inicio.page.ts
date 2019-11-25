import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router:Router, private http:HttpClient) {}
  
  tiponegocio(tipo:string){
    let formdata = new FormData();
    formdata.append('tipo',tipo);
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Negocios.php",formdata).subscribe(data =>{
      let navigationextras : NavigationExtras = {
        queryParams: {
          titulo : tipo,
          data: JSON.stringify(data)
        }
      }
      this.router.navigate(['/tabs/negocios'], navigationextras);
    });
  }
  ngOnInit() {
  }

}
