import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {SlickModule} from './slick/slick.module';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    SolutionsComponent,
    BlockchainComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
