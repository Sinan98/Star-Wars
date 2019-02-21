import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
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
}
