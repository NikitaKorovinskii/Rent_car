import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  tripInfo:[{IdTrip:0, StartDate: '', EndDate: '',NameCar:'',NumberCar:''}]=[
    { IdTrip:0,StartDate: '', EndDate: '',NameCar:'' ,NumberCar:''}];



  constructor() { }

  ngOnInit(): void {
    axios.get("http://localhost:1234/TripInfoClient")
      .then((res) => {

       this.tripInfo =JSON.parse(res.headers["info"])
      })
      .catch((err: any) => {
        console.log(err)
      });
  }

}
