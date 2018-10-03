import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ChatPage } from './chat/chat';
import { MessagePage } from './message/message';
@IonicPage()
@Component({
  selector: 'page-layout',
  templateUrl: 'layout.html',
})
export class LayoutPage {
  pages = [
    {'name':'chat', 'page':ChatPage},
    {'name':'message', 'page':MessagePage }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(p){
    this.navCtrl.setRoot(p);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LayoutPage');
  }

}
