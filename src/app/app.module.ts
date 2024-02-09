import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscrieComponent } from './inscrie/inscrie.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicationComponent } from './publication/publication.component';
import { ProfileComponent } from './profile/profile.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { CarouselModule } from './carousel/carousel.module';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DemandeExpertiseComponent } from './demande-expertise/demande-expertise.component';
import { ChangeMotDePasseComponent } from './change-mot-de-passe/change-mot-de-passe.component';
import { CodeDeConfirmationComponent } from './code-de-confirmation/code-de-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    InscrieComponent,
    ConnexionComponent,
    AcceuilComponent,
    NavbarComponent,
    PublicationComponent,
    ProfileComponent,
    CarouselComponent,
    HomeComponent,
    PublicationDetailsComponent,
    NavbarUserComponent,
    ForgotPasswordComponent,
    DemandeExpertiseComponent,
    ChangeMotDePasseComponent,
    CodeDeConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
