import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {SignInComponent} from './SignIn/sign-in.component';
import {SignUpComponent} from './SignUp/sign-up.component';
import {HomeComponent} from './home/home.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'main-menu', component: MainMenuComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MainMenuComponent,
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
