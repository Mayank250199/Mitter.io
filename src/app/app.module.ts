import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen} from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { enableProdMode } from '@angular/core';
import { MyApp } from './app.component';

//=============== Pages =================
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LayoutPage } from '../pages/layout/layout';
import { TabPage } from '../pages/tab/tab';
import { ChatPage } from '../pages/layout/chat/chat';
import { MessagePage } from '../pages/layout/message/message';

import { ChatConatinerPage } from '../pages/layout/chat/chat-conatiner/chat-conatiner';
import { ChatHeadingPage } from '../pages/layout/chat/chat-heading/chat-heading';
import { SideBarPage } from '../pages/layout/chat/side-bar/side-bar';

enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabPage,
    LoginPage,
    LayoutPage,
    ChatPage,
    MessagePage,
    SideBarPage,
    ChatHeadingPage,
    ChatConatinerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabPage,
    LoginPage,
    LayoutPage,
    ChatPage,
    MessagePage,
    SideBarPage,
    ChatHeadingPage,
    ChatConatinerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
