import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'detail.html'
})
export class detail {
  constructor(public navCtrl: NavController) {

  }
  doSome(){
    console.log(11111);
  }
}
