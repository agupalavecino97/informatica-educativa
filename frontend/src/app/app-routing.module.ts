import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TeoriaComponent } from './components/teoria/teoria.component';
import { LoginComponent } from './components/login/login.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { HistorialComponent } from './components/historial/historial.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'teoria', component: TeoriaComponent},
  { path: 'evaluacion', component: EvaluacionComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'informacion', component: InformacionComponent},
  { path: 'historial', component: HistorialComponent},
  
  // { path: ':company_name', component: HomePageModule},
  
  // { path: ':detalle', loadChildren: ()=> import ('./pages/detail-modal/detail-modal.module').then (m => m.DetailModalPageModule) },
  // { path: 'cart-modal', loadChildren: () => import('./pages/cart-modal/cart-modal.module').then(m => m.CartModalPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }