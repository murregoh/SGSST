import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './shared/home/home.component';
import { QueesComponent } from './shared/quees/quees.component';
import { NormativaComponent } from './shared/normativa/normativa.component';
import { FormacionComponent } from './shared/formacion/formacion.component';
import { IndicadoresComponent } from './shared/indicadores/indicadores.component';
import { InformesComponent } from './shared/informes/informes.component';
import { FormatosComponent } from './shared/formatos/formatos.component';
import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'quees', component: QueesComponent },
    { path: 'normativa', component: NormativaComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: 'indicadores', component: IndicadoresComponent, canActivate: [ AuthGuardService ] },
    { path: 'informes', component: InformesComponent, canActivate: [ AuthGuardService ] },
    { path: 'formatos', component: FormatosComponent, canActivate: [ AuthGuardService ] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
