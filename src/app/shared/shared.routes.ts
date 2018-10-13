import { Routes } from '@angular/router';


export const SHARED_ROUTES: Routes = [

    { path: '**', pathMatch: 'full', redirectTo: 'quees' }
];
