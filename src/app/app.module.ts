import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {SignInComponent} from './SignIn/sign-in.component';
import {SignUpComponent} from './SignUp/sign-up.component';
import {HomeComponent} from './home/home.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {PersonalAccountComponent} from './personal-account/personal-account.component';
import {CarsComponent} from './cars/cars.component';

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'lk', component: PersonalAccountComponent},
  {path: 'cars', component: CarsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MainMenuComponent,
    PersonalAccountComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
