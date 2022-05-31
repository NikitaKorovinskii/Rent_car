import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";

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


  constructor(private dataService: DataService) { }


  ngOnInit(): void {

  }

  reload(startDate: Date, endDate: Date) {
    this.x=2
  startDate=new Date(startDate);
  endDate=new Date(endDate);
  let sum = 0;
    if (startDate <= endDate) {
      let mounth = endDate.getMonth() - startDate.getMonth();
      mounth = mounth * 30;
      let day = endDate.getDate() - startDate.getDate();
      if (mounth == 0 && day==1)
      {
        sum = ((day+mounth) * 2000);
        this.ResultCoast =  "С вас: "+ sum.toString()+ " рублей";
      }
      else
      {
        sum = ((day+mounth) * 2000) * 0.8;
        this.ResultCoast =  "С вас: "+ sum.toString()+ " рублей";}
      this.dataService.addPayCar(sum)
    }
  }

  Further() {
    this.x=1
  }
}
