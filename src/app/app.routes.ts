import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './shared/home/home.component';
import { SHARED_ROUTES } from './shared/shared.routes';

const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: SHARED_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
