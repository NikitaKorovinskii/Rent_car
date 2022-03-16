import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {SignInComponent} from './SignIn/sign-in.component';
import {SignUpComponent} from './SignUp/sign-up.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'Home', component: HomeComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
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
