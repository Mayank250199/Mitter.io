import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ChatConatinerPage } from './chat-conatiner/chat-conatiner';
import { ChatHeadingPage } from './chat-heading/chat-heading';
import { SideBarPage } from './side-bar/side-bar';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  pages = [
    {'name':'chatContainer', 'page':ChatConatinerPage},
    {'name':'ChatHeading', 'page':ChatHeadingPage },
    {'name':'Sidebar', 'page':SideBarPage }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage(p){
    this.navCtrl.setRoot(p);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
