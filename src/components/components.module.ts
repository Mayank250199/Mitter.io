import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { LayoutComponent } from './layout/layout';
import { ChatComponent } from './chat/chat';
@NgModule({
	declarations: [LoginComponent,
    LayoutComponent,
    ChatComponent],
	imports: [],
	exports: [LoginComponent,
    LayoutComponent,
    ChatComponent]
})
export class ComponentsModule {}
