import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact } from './contact/contact/contact';
import { About } from './about/about/about';
import { Home } from './home/home/home';

const routes: Routes = [
  {path: "Home", component: Home},
  {path: "About", component: About},
  {path: "Contact", component: Contact},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
