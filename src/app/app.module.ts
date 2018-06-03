import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component/meuprimeirocomponent';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [], // 
  bootstrap: [AppComponent]  // App inicial do projeto, controladora geral
})
export class AppModule { }
