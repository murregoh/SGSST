import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponent } from './premium/shared/shared.component';
import { NavbarrightComponent } from './shared/navbarright/navbarright.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './premium/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarrightComponent,
    ServicesComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
