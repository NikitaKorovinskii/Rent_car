import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import axios from "axios";


@Component({
  selector: 'app-modal-rent-car',
  templateUrl: './modal-rent-car.component.html',
  styleUrls: ['./modal-rent-car.component.css']
})

export class ModalRentCarComponent implements OnInit {

  startDate: any;
  endDate: any;
  @Output() closes = new EventEmitter<void>();
  ResultCoast = "";
  x = 1;



   model: NgbDateStruct;
   date: { year: number; month: number };

  constructor(private calendar: NgbCalendar, private dataService: DataService) {
    this.date = {year: 0, month: 0};
    this.model = {year: 0, month: 0, day: 0};
  }


  isDisabled = (date: NgbDate) =>
    date.month==6 && date.day > 8 && date.day <20

  ngOnInit(): void {

  }

  onSearch($event: Event , startDate: Date, endDate: Date) {
    startDate=new Date(this.startDate);
    endDate=new Date(this.endDate);
    if (endDate>=startDate){


    let sum = 0;


    let mounth = endDate.getMonth() - startDate.getMonth();
    mounth = mounth * 30;
    let day = endDate.getDate() - startDate.getDate();
    if (day==0){
      day=1
    }
    this.x=2

    if (mounth == 0 && day==1)
    {
      sum = ((day+mounth) * this.dataService.getPriceCar());
      this.ResultCoast =  "С вас: "+ sum.toString()+ " рублей";
    }
    else
    {
      sum = ((day+mounth) * this.dataService.getPriceCar()) * 0.8;
      this.ResultCoast =  "С вас: "+ sum.toString()+ " рублей";
    }
    }


  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}

