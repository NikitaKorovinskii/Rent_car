import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  modal = false;
  modals =false;
  x=1;
  balance ="Баланс:";
  sum = "1200"+"руб";
  clientName = "Никита";
  clientLastName ="Коровинский";
  nameCar="Lada Granta";
  priceCar: number = 2000;

  constructor() { }

  ngOnInit(): void {
  }

}
