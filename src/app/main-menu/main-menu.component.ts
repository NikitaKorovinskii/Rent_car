import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  priceCarOneDaytTarrif = "1800"+" руб/день";
  countDayOneDaytTarrif = "1 день";
  priceCarTenDaytTarrif = "1700"+" руб/день";
  countDayTenDaytTarrif = "2-10 дней";
  priceCarThirtyDaytTarrif = "1600"+" руб/день";
  countDayThirtyDaytTarrif = "10-30 дней";
  priceCarThirtyOneDaytTarrif = "1300"+" руб/день";
  countDayThirtyOneDaytTarrif = "31 и более дней";


  constructor() {

  }

  ngOnInit(): void {
  }

}
