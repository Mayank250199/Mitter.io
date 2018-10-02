import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideBarPage } from './side-bar';

@NgModule({
  declarations: [
    SideBarPage,
  ],
  imports: [
    IonicPageModule.forChild(SideBarPage),
  ],
})
export class SideBarPageModule {}
