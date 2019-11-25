import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: HttpClient) {

  }
  test() {
    this.http.get('https://getman.cn/mock/api/test').subscribe(res => {
      alert(res)
    })
  }
}
