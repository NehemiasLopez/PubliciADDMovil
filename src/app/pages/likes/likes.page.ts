import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {

  listalikes:any[];
  constructor(private router:Router, private http:HttpClient) {
    let formdata = new FormData();
    formdata.append('tokenU', '5');
    this.http.post("https://publiciadd.000webhostapp.com/Webservice/Likes.php",formdata).subscribe(data =>{
      this.listalikes = JSON.parse(JSON.stringify(data));
    });
  }

  ngOnInit() {
  }

}
