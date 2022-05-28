import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  modal = false;
  modals =false;
  x=1;
  nameCar="Lada Granta";
  priceCar: number = 2000;

  constructor() { }

  ngOnInit(): void { //Изменить запрос на получение массива данных
    /*axios.get("http://localhost:1234/")
      .then((res)=>{
        this.clientFio=(res.data)
      })
      .catch ((err:any)=>
      {
        console.log(err)
      });*/
  }

}
