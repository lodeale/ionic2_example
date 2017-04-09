import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {

  dataHome:dataHome = {
    title:"Leviatan"
  };

  constructor(public navCtrl: NavController, private _homeService: HomeService) {
    console.log(this._homeService.action());
  }

}

interface dataHome {
    title:string;
}
