import { Routes } from '@angular/router';
import { QueesComponent } from './quees/quees.component';
import { NormativaComponent } from './normativa/normativa.component';
import { FormacionComponent } from './formacion/formacion.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { InformesComponent } from './informes/informes.component';
import { FormatosComponent } from './formatos/formatos.component';

export const SHARED_ROUTES: Routes = [
    { path: 'quees', component: QueesComponent },
    { path: 'normativa', component: NormativaComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: 'indicadores', component: IndicadoresComponent },
    { path: 'informes', component: InformesComponent },
    { path: 'formatos', component: FormatosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'quees' }
];
