import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes} from './app.router';
import { StarRatingModule } from 'angular-star-rating';

import { HttpClient, HttpClientModule}from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategorComponent } from './categor/categor.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ApiProviderService } from './api-provider.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategorComponent,
    AboutComponent,
    LogoutComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent,
    ViewerComponent,
  ],
  imports: [
 
    BrowserModule,
    FormsModule,
    HttpClientModule,
	HttpModule,
    routes,
    StarRatingModule.forRoot()

  ],
  providers: [ApiProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
