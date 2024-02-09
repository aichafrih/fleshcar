import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscrieComponent } from './inscrie/inscrie.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PublicationComponent } from './publication/publication.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DemandeExpertiseComponent } from './demande-expertise/demande-expertise.component';
import { ChangeMotDePasseComponent } from './change-mot-de-passe/change-mot-de-passe.component';

const routes: Routes = [
  { path: '', component: AppComponent },
    { path: 'inscrie', component: InscrieComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'publication', component: PublicationComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'publication-details', component: PublicationDetailsComponent },
    { path: 'oublier-Mot-de-passe', component: ForgotPasswordComponent },
    { path: 'changer-Mot-de-passe', component: ChangeMotDePasseComponent },
    { path: 'demande-expertise', component: DemandeExpertiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
