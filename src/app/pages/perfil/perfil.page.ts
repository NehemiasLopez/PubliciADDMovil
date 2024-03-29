import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  listalikes:any[];
  cantlike:number;
  cantlista:number;
  constructor(private router:Router, private http:HttpClient) {
    let formdata = new FormData();
    formdata.append('tokenU', '5');
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Likes.php",formdata).subscribe(data =>{
      this.listalikes = JSON.parse(JSON.stringify(data)).Productoslikes;
      this.cantlike = JSON.parse(JSON.stringify(data)).cantlikes[0].cantlikes;
      this.cantlista = JSON.parse(JSON.stringify(data)).cantcotizaciones[0].cantlista;
    });
  }

  ngOnInit() {
  }

}
