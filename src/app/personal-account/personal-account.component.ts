import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {DataService} from "../data.service";


@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {
  clientEmail="";
  clientDriverNum = "";
  clientFio= "";
  colors: { Email: string; IdClient: string; Id: string; Login: string; Password: string }[] = [
    { "Id": "", "Login": "","Email": "","Password": "","IdClient": "" }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // поменять на запрос ниже
    axios.get("http://localhost:1234/client")
      .then((res) => {
        console.log(res.headers)
        for (let i = 0; i < res.headers["Auth"].length; i++) {
          this.colors.push(JSON.parse(res.headers["Auth"][i]))
          console.log(this.colors[i].Email)
        }
      })
      .catch((err: any) => {
        console.log(err)
      });

  }

}
