import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import axios from "axios";
import {WalletService} from "../Wallet.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-fill-balance',
  templateUrl: './fill-balance.component.html',
  styleUrls: ['./fill-balance.component.css'],

})
export class FillBalanceComponent implements OnInit {
  modal = false;
  balance = this.WalletService.getSum()
  constructor(private dataService: DataService,private modalService: NgbModal,private WalletService: WalletService) { }


  ngOnInit(): void {
    axios.get("http://localhost:1234/Balance",
      {
        headers:{
          "Token":this.dataService.getToken().split('.')[1],
          "IdClient":this.dataService.getToken().split('.')[0]
        }})
      .then((res) => {
       this.WalletService.addSum(  JSON.parse(res.headers["balance"]))
        this.balance = this.WalletService.getSum()
      })
      .catch((err: any) => {
        console.log(err)
      });

  }
  change() {
    this.modal=true;
  }

  Change123($event: Event ) {
    axios.get("http://localhost:1234/Balance",
      {
        headers:{
          "Token":this.dataService.getToken().split('.')[1],
          "IdClient":this.dataService.getToken().split('.')[0]
        }})
      .then((res) => {
        this.balance = JSON.parse(res.headers["balance"])
      })
      .catch((err: any) => {
        console.log(err)
      });
  }

  balanceNew() {
    this.balance = this.WalletService.getSum()
  }
}
