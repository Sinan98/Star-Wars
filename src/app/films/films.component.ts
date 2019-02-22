import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent {

  private apiUrl = 'https://swapi.co/api/films';
  data: any = {};


  constructor(private http: HttpClient) {

    console.log('Hello');
    this.getTitle();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
  }

  getTitle() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }



}