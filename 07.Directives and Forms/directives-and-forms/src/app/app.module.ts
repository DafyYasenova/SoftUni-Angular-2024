import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MyRouterlinkDirective } from './my-routerlink.directive';
import { MyStructuralDirDirective } from './my-structural-dir.directive';

@NgModule({
  declarations: [
    // here import automatically directives:
    AppComponent,
    HighlightDirective,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyRouterlinkDirective,
    MyStructuralDirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
