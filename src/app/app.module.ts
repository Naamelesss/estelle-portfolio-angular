import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopNavigationComponent } from './desktop-navigation/desktop-navigation.component';
import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { ContactThanksComponent } from './contact-thanks/contact-thanks.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopNavigationComponent,
    HomeComponent,
    KnowledgeComponent,
    CvComponent,
    ContactComponent,
    ContactThanksComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
