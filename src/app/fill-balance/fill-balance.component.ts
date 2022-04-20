import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-fill-balance',
  templateUrl: './fill-balance.component.html',
  styleUrls: ['./fill-balance.component.css'],

})
export class FillBalanceComponent implements OnInit {
  modal = false
  balanceSum=this.dataService.getData()
  click(){
    this.balanceSum =this.dataService.getData();//запрос к серверу
  }
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}