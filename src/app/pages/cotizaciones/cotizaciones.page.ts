import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit() {
  }

}
