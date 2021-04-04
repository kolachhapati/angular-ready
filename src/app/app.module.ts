//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './shared/modules/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { SigninComponent } from '../app/auth/signin/signin.component';
import { SignupComponent } from '../app/auth/signup/signup.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { HomeComponent } from './pages/home/home.component';

// Interceptors
import TokenInterceptor from './shared/interceptors/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
