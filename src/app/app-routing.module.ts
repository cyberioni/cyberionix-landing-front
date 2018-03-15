import { BlockchainComponent } from './blockchain/blockchain.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Company', pathMatch: 'full' },
  { path: 'Company', component: CompanyComponent },
  { path: 'Solutions', component: SolutionsComponent },
  { path: 'Blockchain', component: BlockchainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
