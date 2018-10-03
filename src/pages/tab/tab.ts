import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { LayoutPage } from '../layout/layout';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  homeRoot = HomePage
  loginRoot = LoginPage
  layoutRoot = LayoutPage

  constructor(public navCtrl: NavController) {}

}
