import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { MaterialModule } from './material.module';
// import { M } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorkComponent } from './pages/work/work.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { CardsComponent } from './sharepages/cards/cards.component';
import { DropsComponent } from './sharepages/drops/drops.component';
import { ContactFormComponent } from './sharepages/contact-form/contact-form.component';
import { MainFooterComponent } from './pages/main-footer/main-footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeContainerComponent } from './sharepages/home-container/home-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    AchievementsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    DropsComponent,
    ContactFormComponent,
    MainFooterComponent,
    LoginComponent,
    HomeContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
