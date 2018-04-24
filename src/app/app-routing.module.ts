import { BlockchainComponent } from './blockchain/blockchain.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
