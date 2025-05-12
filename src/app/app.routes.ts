import { Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    }
];
