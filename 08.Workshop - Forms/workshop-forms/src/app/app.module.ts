import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { MainComponent } from './main/main.component';
// import { ThemesListComponent } from './themes-list/themes-list.component';
// import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    // ThemesListComponent,
    // PostsListComponent,
    HomeComponent,
    AddThemeComponent,
    ErrorComponent,
   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    ThemeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
