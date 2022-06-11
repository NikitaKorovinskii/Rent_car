import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {DataService} from '../data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  modal = false;
  modals =false;
  x=1;
  bat=1;
  nameCar="Lada Granta";
  priceCar: number = 2000;
  cars:[{IdCar:0, NameCar: '', PriceCar: 0, BodyType: '',CountSeats:0,Transmission:'',ImgCar:'',Horsepower:0,Engine:0}]=[
    { IdCar:0,NameCar: '', PriceCar: 0, BodyType: '',CountSeats:0,Transmission:'' ,ImgCar:'',Horsepower:0,Engine:0}
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void { //Изменить запрос на получение массива данных
    axios.get("http://localhost:1234/cars")
      .then((res) => {
        this.dataService.addCars(JSON.parse(res.headers["cars"]))
        this.cars = this.dataService.getCars()
      })
      .catch((err: any) => {
        console.log(err)
      });

    axios.get("http://localhost:1234/TO")
      .then((res) => {
        this.dataService.addTech(JSON.parse(res.headers["tech"]))
      })
      .catch((err: any) => {
        console.log(err)
      });


  }

  change(IdCar: number) {
    this.modal=true
    this.dataService.addIdCar(IdCar)


  }

  price(PriceCar: number, id:number) {

    axios.post('http://localhost:1234/Trip',  {
      IdCar : id
      }
    )
      .then((response) => {
        if (response.status === 200) {
          this.dataService.addTrip( JSON.parse(response.headers["trip"]))
          this.modals=true
          this.dataService.addPriceCar(PriceCar)
          this.dataService.addIdCar(id)
        }
      })
      .catch((error) => {

      });
  }
}
