import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {SignInComponent} from './SignIn/sign-in.component';
import {SignUpComponent} from './SignUp/sign-up.component';
import {PersonalAccountComponent} from './personal-account/personal-account.component';
import {CarsComponent} from './cars/cars.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { RentalConditionsComponent } from './rental-conditions/rental-conditions.component';
import { InfoCompanyComponent } from './info-company/info-company.component';
import { ContactCompanyComponent } from './contact-company/contact-company.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './history/history.component';
import { FillBalanceComponent } from "./fill-balance/fill-balance.component";
import { ModalComponent } from './modal/modal.component';
import {NgxMaskModule} from "ngx-mask";
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { ModalRentCarComponent } from './modal-rent-car/modal-rent-car.component';

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'lk', component: PersonalAccountComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'rental-conditions', component: RentalConditionsComponent},
  {path: 'info', component: InfoCompanyComponent},
  {path: 'contact', component: ContactCompanyComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'fill-balance', component: FillBalanceComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PersonalAccountComponent,
    CarsComponent,
    AppNavComponent,
    RentalConditionsComponent,
    InfoCompanyComponent,
    ContactCompanyComponent,
    FooterComponent,
    HistoryComponent,
    FillBalanceComponent,
    ModalComponent,
    ModalInfoComponent,
    ModalRentCarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
