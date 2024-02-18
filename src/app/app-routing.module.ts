import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';



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
import { CodeDeConfirmationComponent } from './code-de-confirmation/code-de-confirmation.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: AppComponent },
    { path: 'inscrie', component: InscrieComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'publication', component: PublicationComponent },
    { path: 'profil/:userId', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent },
    { path: 'publication-details', component: PublicationDetailsComponent },
    { path: 'oublier-Mot-de-passe', component: ForgotPasswordComponent },
    { path: 'code-de-confirmation', component: CodeDeConfirmationComponent },
    { path: 'changer-Mot-de-passe', component: ChangeMotDePasseComponent },
    { path: 'demande-expertise', component: DemandeExpertiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
