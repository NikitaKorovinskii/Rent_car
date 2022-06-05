import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import axios from "axios";

@Component({
  selector: 'app-fill-balance',
  templateUrl: './fill-balance.component.html',
  styleUrls: ['./fill-balance.component.css'],

})
export class FillBalanceComponent implements OnInit {
  modal = false;
  balance:[{ Sum: 0}]=[
    { Sum: 0,}
  ];
  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    axios.get("http://localhost:1234/Balance")
      .then((res) => {
       this.balance = JSON.parse(res.headers["balance"])
      })
      .catch((err: any) => {
        console.log(err)
      });

  }
  change() {
    this.modal=true;
  }

  Change123($event: Event ) {
    axios.get("http://localhost:1234/Balance")
      .then((res) => {
        this.balance = JSON.parse(res.headers["balance"])
      })
      .catch((err: any) => {
        console.log(err)
      });
  }
}
