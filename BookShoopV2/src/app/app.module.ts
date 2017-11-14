import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes} from './app.router';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategorComponent } from './categor/categor.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ViewerComponent } from './viewer/viewer.component';


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
    ViewerComponent
  ],
  imports: [
 
    BrowserModule,
    FormsModule,
    
    routes,
    StarRatingModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
