import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GeometricBackgroundComponent } from '../components/geometric-background.component';
import { LoginFormComponent } from '../components/login-form.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    GeometricBackgroundComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  // Configure as rotas, se necessário
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
