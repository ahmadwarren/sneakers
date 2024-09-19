import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoeComponent } from './shoe/shoe.component';

export const routes: Routes = [
    {path: "home",component: HomeComponent},
    {path:"men",component: MenComponent},
    {path:"shoe",component: ShoeComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
