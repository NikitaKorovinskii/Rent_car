import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";
import {ModalDismissReasons, NgbCalendar, NgbDate, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import axios from "axios";


//import {modelGroupProvider} from "@angular/forms";


@Component({
  selector: 'app-modal-rent-car',
  templateUrl: './modal-rent-car.component.html',
  styleUrls: ['./modal-rent-car.component.css']
})

export class ModalRentCarComponent implements OnInit {
  @Output() closes = new EventEmitter<void>();
  modals = false;
  ResultCoast = "";
  x = 0;
  currentDate: any = new Date()
  model: NgbDateStruct;
  models: NgbDateStruct;
  sDate: any
  eDate: any
   sum = 0;
  date: { year: number, month: number };
  tripsDate: [{ StartDate: '', EndDate: '' }] = [{StartDate: '', EndDate: ''}];

  constructor(private dataService: DataService, private calendar: NgbCalendar) {
    this.model = {year: 0, month: 0, day: 0}
    this.date = {year: 0, month: 0}
    this.models = {year: 0, month: 0, day: 0}
  }

  isDisabled = (date: NgbDate) => {

    // Функция преобразования вашего формата даты в NgbDate
    // fromDate должна быть в формате DD.MM.YYYY (то есть как у вас)
    const toNgbDate = (fromDate: string): NgbDate | null | undefined => {
      const a: string[] = fromDate.split('.');
      if (!a || a.length != 3) {
        return undefined;
      }

      return NgbDate.from({
        year: +a[2],
        month: +a[1],
        day: +a[0]
      });
    };

    for (const d of this.tripsDate) {
      const start: NgbDate | null | undefined = toNgbDate(d.StartDate);
      const end: NgbDate | null | undefined = toNgbDate(d.EndDate);

      // Обе границы должны быть валидны
      if (!start || !end) {
        continue;
      }



      // Либо, если интервал типа [...]
       if (date.equals(start) || date.equals(end)) {
       return true;
       }

      // Если попали в интервал, то возвращаем true
      if (date.after(start) && date.before(end)) {
        return true;
      }
    }
    return false;
  }



  ngOnInit(): void {
    this.tripsDate = this.dataService.getTrip();
  }


  sendDate($event: MouseEvent) {
    this.sDate = new Date(this.model.year, this.model.month, this.model.day);
    if (this.eDate >= this.sDate) {


      let sum = 0;

      let years = (this.eDate.getFullYear() - this.sDate.getFullYear()) * 365;
      let month = (this.eDate.getMonth() - this.sDate.getMonth()) * 30;
      let day = this.eDate.getDate() - this.sDate.getDate();
      if (day == 0) {
        day = 1
      }


      if (month == 0 && day == 1) {
        sum = ((day + month + years) * this.dataService.getPriceCar());
        this.ResultCoast = "С вас: " + sum.toString() + " рублей";
      } else {
        sum = ((day + month + years) * this.dataService.getPriceCar()) * 0.8;
        this.ResultCoast = "С вас: " + sum.toString() + " рублей";
      }
      this.x = 1
    } else this.x = 2
  }

  sendAddDate($event: MouseEvent) {
    this.eDate = new Date(this.models.year, this.models.month, this.models.day);

    if (this.eDate >= this.sDate) {




      let years = (this.eDate.getFullYear() - this.sDate.getFullYear()) * 365;
      let month = (this.eDate.getMonth() - this.sDate.getMonth()) * 30;
      let day = this.eDate.getDate() - this.sDate.getDate();
      if (day == 0) {
        day = 1
      }


      if (month == 0 && day == 1) {
        this.sum = ((day + month + years) * this.dataService.getPriceCar());
        this.ResultCoast = "С вас: " + this.sum .toString() + " рублей";
      } else {
        this.sum  = ((day + month + years) * this.dataService.getPriceCar()) * 0.8;
        this.ResultCoast = "С вас: " + this.sum .toString() + " рублей";
      }
      this.x = 1
    } else this.x = 2

  }

  CoastTrip() {
    if (this.dataService.getWalletSum()>this.sum){
    let sDate = (this.sDate.getDate().toString() + "." + this.sDate.getMonth().toString() + "." + this.sDate.getFullYear().toString())
    let eDate = (this.eDate.getDate().toString() + "." + this.eDate.getMonth().toString() + "." + this.eDate.getFullYear().toString())
    axios.post('http://localhost:1234/addWallet', {
        Sum: this.sum * (-1)
      },
      {
        headers:{
          "Token":this.dataService.getToken().split('.')[1],
          "IdClient":this.dataService.getToken().split('.')[0]
        }
      }
    )
      .then((response) => {
        if (response.status === 200) {
          this.dataService.addNewSum(JSON.parse(response.headers["account"]))
          console.log(this.dataService.getNewSum())
        }
      })
      .catch((error) => {
      });
    axios.post('http://localhost:1234/addTrip', {
        StartDate: sDate.toString(),
        EndDate: eDate.toString(),
        IdCar: this.dataService.getIdCar(),

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
        }
      })
      .catch((error) => {
      });
  }
    else {
      alert("Необходимо пополнить баланс на сумму: "+ (this.sum-this.dataService.getWalletSum())+" ₽")

    }
  }

}

