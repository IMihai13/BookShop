import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategorComponent } from './categor/categor.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';


export const router: Routes = [
	
	{path:'home',component:HomeComponent},
	{path:'about',component:AboutComponent},
	{path:'cart',component:CartComponent},
	{path:'login',component:HomeComponent},
	{path:'logout',component:LogoutComponent},
	{path:'categor',component:CategorComponent},
	{path:'register',component:RegisterComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);