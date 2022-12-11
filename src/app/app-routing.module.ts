import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RdvComponent } from './pages/rdv/rdv.component';
import { RdvListComponent } from './pages/rdv-list/rdv-list.component';
import { ModalEditRdvComponent } from './modals/modal-edit-rdv/modal-edit-rdv.component';
import { ModalAcceptRdvComponent } from './modals/modal-accept-rdv/modal-accept-rdv.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { ClientComponent } from './ajouter-compte/client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { DeviseListComponent } from './devise-list/devise-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CreerAgenceComponent } from './creer-agence/creer-agence.component';
import { AgenceListComponent } from './agence-list/agence-list.component';
import { DemandeCreditComponent } from './demande-credit/demande-credit.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutComponent } from './logout/logout.component';
import { ListeDemandeCreditComponent } from './liste-demande-credit/liste-demande-credit.component';
import { FileComponent } from './file/file.component';
import { DemandeChequeComponent } from './demande-cheque/demande-cheque.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { CarteComponent } from './carte/carte.component';
//import { AuthGuard } from './_auth/auth.guard';





const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'listCompte', component : CompteComponent },
  { path: 'welcome', component : WelcomeComponent},
  { path: 'rdv',component : RdvComponent },
  { path: 'ListRdv',component : RdvListComponent },
  { path: 'ModalAcceptRdv',component : ModalAcceptRdvComponent },
  { path: 'ModalEditRdv',component : ModalEditRdvComponent },
  { path: 'creditList',component : CreditListComponent },
  { path: 'compteClient', component : ClientComponent },
  { path: 'clientList', component : ClientListComponent},
  { path: 'addCompteClient', component : CompteClientComponent},
  { path: 'deviseList', component : DeviseListComponent},
  { path: 'login', component : LoginComponent},
  { path: 'admin', component : AdminComponent},
  { path: 'user', component : UserComponent},
  { path: 'creerAgence', component : CreerAgenceComponent},
  { path: 'AgenceList', component : AgenceListComponent},
  { path: 'demandeCredit', component : DemandeCreditComponent},
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'listeAgence', component: AgenceListComponent },
  { path: 'listeDemandeCredit', component: ListeDemandeCreditComponent },
  { path: 'Cheque', component: DemandeChequeComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'suggestion', component: SuggestionComponent },
  { path: 'carte', component: CarteComponent }




























  //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
