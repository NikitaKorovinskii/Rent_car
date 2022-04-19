import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-balance',
  templateUrl: './fill-balance.component.html',
  styleUrls: ['./fill-balance.component.css']
})
export class FillBalanceComponent implements OnInit {
  modal = false
  balanceSum ="228 Олегов"

  constructor() { }

  ngOnInit(): void {
  }

}
