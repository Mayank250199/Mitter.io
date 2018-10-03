import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatConatinerPage } from './chat-conatiner';

@NgModule({
  declarations: [
    ChatConatinerPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatConatinerPage),
  ],
})
export class ChatConatinerPageModule {}
