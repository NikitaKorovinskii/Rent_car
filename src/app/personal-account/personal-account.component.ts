import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {DataService} from "../data.service";


@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {
  balance ="Баланс:";
  sum = "1200"+"руб";
  clientEmail="Korovinskii@mail.ru";
  clientDriverNum = "1112 454879";
  clientFio= "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // поменять на запрос ниже
     axios.get("http://localhost:1234/")
      .then((res)=>{
        this.clientFio=(res.data)
       })
       .catch ((err:any)=>
       {
         console.log(err)
      });
  }

}
