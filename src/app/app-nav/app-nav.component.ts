import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cars() {
    this.router.navigate(['/cars'])
  }

  rentalConditions() {
    this.router.navigate(['/rental-conditions'])
  }

  info() {
    this.router.navigate(['/info'])
  }

  contact() {
    this.router.navigate(['/contact'])
  }

  history() {
    this.router.navigate(['/history'])
  }

  fillBalance() {
    this.router.navigate(['/fill-balance'])
  }

  SignIn() {
    this.router.navigate(['/SignIn'])
  }

  lk() {
    this.router.navigate(['/lk'])
  }
}
