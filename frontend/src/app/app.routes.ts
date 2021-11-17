import { RouterModule, Routes } from '@angular/router';

import { TeoriaComponent } from './components/teoria/teoria.component';
import { LoginComponent } from './components/login/login.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: 'login', pathMatch: 'full'},
    // { path: '**', redirectTo: 'login', pathMatch: 'full'},
    { path: '', component: LoginComponent},
    { path: '**', component: LoginComponent},
    { path: 'teoria', component: TeoriaComponent },
    { path: 'evaluacion', component: EvaluacionComponent },
    { path: 'perfil', component: PerfilComponent },

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
