import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.page.html',
  styleUrls: ['./negocios.page.scss'],
})
export class NegociosPage implements OnInit {
  name:string;
  negocios: any[];
  constructor(private route: ActivatedRoute, private router:Router, private http:HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.name=params.titulo;
      this.negocios = JSON.parse(params.data);
    });
  }

  productos(token:string, nombretienda:string){
    let formdata = new FormData();
    formdata.append('token',token);
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Productos.php", formdata).subscribe(data =>{
      let navigationextras : NavigationExtras = {
        queryParams: {
          nombre : nombretienda,
          data: JSON.stringify(data)
        }
      }
      this.router.navigate(['/tabs/vistanegocio'], navigationextras);
    });
  }
  ngOnInit() {
  }

}
