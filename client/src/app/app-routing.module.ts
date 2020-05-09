import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
  {path:'' ,redirectTo:'login',pathMatch:'full'},
  {path:'login', component : LoginComponent },  
  { path: 'home', component: HomeComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
