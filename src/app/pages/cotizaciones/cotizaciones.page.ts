import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
})
export class CotizacionesPage implements OnInit {
  listacotizaciones:any[];
  constructor(private router:Router, private http:HttpClient) {
    let formdata = new FormData();
    formdata.append('tokenU', '2');
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Cotizaciones.php",formdata).subscribe(data =>{
      this.listacotizaciones = JSON.parse(JSON.stringify(data));
    });
  }

  verlista(tokenc:string, title:string){
    let formdata = new FormData();
    formdata.append('tokenU', '2');
    formdata.append('tokenC', tokenc);
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Verlista.php",formdata).subscribe(data =>{
      let navigationextras : NavigationExtras = {
        queryParams: {
          titulo : title,
          data: JSON.stringify(data)
        }
      }
      this.router.navigate(['/tabs/vercotizaciones'], navigationextras);
    });
  }
  
  ngOnInit() {
  }

}
