import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { ContactThanksComponent } from './contact-thanks/contact-thanks.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, data: { animation: 'landing' }},
  {path: 'accueil', component: HomeComponent, data: { animation: 'portfolio' }},
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
