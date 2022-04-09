import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {
  balance ="Баланс:";
  sum = "1200"+"руб";
  clientName = "Никита";
  clientLastName ="Коровинский";
  clientMiddleName = "Сергеевич";
  clientEmail="Korovinskii@mail.ru";
  clientDriverNum = "1112 454879";

  constructor() { }

  ngOnInit(): void {
  }

}
