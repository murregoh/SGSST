// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { SharedComponent } from './premium/shared/shared.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './premium/service/service.component';
import { NormativaComponent } from './shared/normativa/normativa.component';
import { QueesComponent } from './shared/quees/quees.component';
import { FormacionComponent } from './shared/formacion/formacion.component';
import { IndicadoresComponent } from './shared/indicadores/indicadores.component';
import { InformesComponent } from './shared/informes/informes.component';
import { FormatosComponent } from './shared/formatos/formatos.component';
import { HomeComponent } from './shared/home/home.component';
import { SharedStandarComponent } from './standar/shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';

// Routes
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarComponent,
    ServicesComponent,
    ServiceComponent,
    NormativaComponent,
    QueesComponent,
    FormacionComponent,
    IndicadoresComponent,
    InformesComponent,
    FormatosComponent,
    HomeComponent,
    SharedStandarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
