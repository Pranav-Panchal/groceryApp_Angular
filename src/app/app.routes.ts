import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { FormComponent } from './components/form/form.component';
import { ApiComponent } from './components/api/api.component';

export const routes: Routes = [
    { path: '', title: 'Home Page', component: HomeComponent },
    { path: 'about', title: 'About Page', component: AboutComponent },
    { path: 'news', title: 'News Page', component: NewsComponent },
    { path: 'grocery', title: 'Grocery Page', component: GroceryComponent },
    { path: 'form', title: 'Contact Form', component: FormComponent,},   
    { path: 'api-data', title: 'API Data', component: ApiComponent },

];
