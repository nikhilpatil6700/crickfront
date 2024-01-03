import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'live',
        pathMatch:'full'
    },
    
    { path:  "home",
    component:HomeComponent},

    { path:"history",
     component:HistoryComponent},
     
    { path: "live"
    ,component:LiveComponent }
];
