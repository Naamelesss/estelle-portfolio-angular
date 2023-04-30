import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { ContactThanksComponent } from './contact-thanks/contact-thanks.component';

const routes: Routes = [
  {path: 'accueil', component: HomeComponent},
  {path: 'savoir-faire', component: KnowledgeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/thanks', component: ContactThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
