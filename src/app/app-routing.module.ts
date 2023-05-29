import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HomeComponent } from './components/home/home.component';
//import { AboutComponent } from './components/about/about.component';
//import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
 // { path: '', component: HomeComponent },       // Rota para a página inicial
 // { path: 'about', component: AboutComponent }, // Rota para a página "Sobre"
 // { path: 'contact', component: ContactComponent } // Rota para a página "Contato"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
