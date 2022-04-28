import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {
  balance ="Баланс:";
  sum = "1200"+"руб";
  clientName = "res";
  clientLastName ="Коровинский";
  clientMiddleName = "Сергеевич";
  clientEmail="Korovinskii@mail.ru";
  clientDriverNum = "1112 454879";

  constructor() { }

  ngOnInit(): void {
    axios.get("http://localhost:1234/")
      .then((res)=>{
        console.log(res.data)
      })
      .catch ((err:any)=>
      {
        console.log(err)
      });
  }

}
