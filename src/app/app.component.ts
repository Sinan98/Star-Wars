import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private apiUrl = 'https://swapi.co/api/films';
  data: any = {};


  constructor(private http: HttpClient) {

    console.log('Hello');
    this.getTitle();
    this.getData();

    var config = {
      apiKey: "AIzaSyAty6ZAmWpvX8ildRmrMl7m8ShMzzSusFI",
      authDomain: "star-warss.firebaseapp.com",
      databaseURL: "https://star-warss.firebaseio.com",
      projectId: "star-warss",
      storageBucket: "star-warss.appspot.com",
      messagingSenderId: "784507467883"
    };
    firebase.initializeApp(config);
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
