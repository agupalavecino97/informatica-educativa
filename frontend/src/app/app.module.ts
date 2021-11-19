import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { TeoriaComponent } from './components/teoria/teoria.component';
import { LoginComponent } from './components/login/login.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';


import { EstudianteService } from './services/estudiante.service'
import { AppRoutingModule } from './app-routing.module';
// import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InformacionComponent } from './components/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TeoriaComponent,
    LoginComponent,
    EvaluacionComponent,
    PerfilComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    // APP_ROUTES,
    
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    //material
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
