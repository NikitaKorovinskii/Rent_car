import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";
import axios from "axios";

function getRandomInt(number: number) {
  return Math.floor(Math.random() * number);
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  g = getRandomInt(80);
  h = getRandomInt(100);
  c = getRandomInt(19)
  cars: [{
    IdCar: 0, NameCar: '', PriceCar: 0, BodyType: '', CountSeats: 0,
    Transmission: '', ImgCar: '', Horsepower: 0, Engine: 0,
  }] = [{
      IdCar: 0, NameCar: '', PriceCar: 0, BodyType: '', CountSeats: 0, Transmission:
        '', ImgCar: '', Horsepower: 0, Engine: 0
    }];

  Tech: [{
    IdInspection: 0, DateOfPassage: '', Description: '', IdCar: 0
  }] = [
    {
      IdInspection: 0, DateOfPassage: '', Description: '', IdCar: 0
    }
  ];
  cass: any = [];
  teche: any = [];

  constructor(private dataService: DataService) {
  }

  sum: number = 0;


  ngOnInit() {//Изменить запрос на получение массива данных


    let y = this.dataService.getIdCar()
    this.cars = this.dataService.getCars()
    this.cass = this.cars.filter(p => p.IdCar == y)
    this.Tech = this.dataService.getTech()
    this.teche = this.Tech.filter(p => p.IdCar == y)
  }
}
