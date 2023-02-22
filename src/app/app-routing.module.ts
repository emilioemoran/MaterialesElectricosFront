import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
