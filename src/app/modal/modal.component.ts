import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import axios from "axios";
import {WalletService} from "../Wallet.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  constructor(private dataService: DataService,private WalletService: WalletService){}

  sum: number = 0;

  ngOnInit(){

  }
  addItem(sum: number){
    if (sum > 0 && sum!=null ){
      axios.post('http://localhost:1234/addWallet',  {
          Sum:sum,
        },
        {
          headers: {
            "Token": this.dataService.getToken().split('.')[1],
            "IdClient": this.dataService.getToken().split('.')[0]
          }
        }
      )
        .then((response) => {
          if (response.status === 200) {
            this.dataService.addNewSum(JSON.parse(response.headers["account"]))
            console.log(this.dataService.getNewSum())
            this.WalletService.addSum(JSON.parse(response.headers["account"]))
          }})
        .catch((error) => {
        });
    }
    }

}
