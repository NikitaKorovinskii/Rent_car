import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  tripInfo:[{IdTrip:0, StartDate: '', EndDate: '',NameCar:'',NumberCar:''}]=[
    { IdTrip:0,StartDate: '', EndDate: '',NameCar:'' ,NumberCar:''}];



  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 210;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Отчёт по арендованным машинам.pdf');
    });
  }

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
