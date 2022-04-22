import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-fill-balance',
  templateUrl: './fill-balance.component.html',
  styleUrls: ['./fill-balance.component.css'],

})
export class FillBalanceComponent implements OnInit {
  modal = false
  balanceSum = 0;
  click(){
    this.balanceSum = this.dataService.getData();//запрос к серверу на обновление и на отправку чека
  }
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
