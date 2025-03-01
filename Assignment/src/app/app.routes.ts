import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:"home", component: HomeComponentComponent},
];
